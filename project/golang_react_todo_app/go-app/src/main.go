package main

import (
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

func main() {
    // ルーターの初期化
    router := gin.Default()


 router.Use(cors.New(cors.Config{
        // 許可したいHTTPメソッドの一覧
        AllowMethods: []string{
            "POST",
            "GET",
            "OPTIONS",
            "PUT",
            "DELETE",
        },
        // 許可したいHTTPリクエストヘッダの一覧
        AllowHeaders: []string{
            "Access-Control-Allow-Headers",
            "Content-Type",
            "Content-Length",
            "Accept-Encoding",
            "X-CSRF-Token",
            "Authorization",
        },
        // 許可したいアクセス元の一覧
        AllowOrigins: []string{
            "http://localhost:80",
        },
        // 自分で許可するしないの処理を書きたい場合は、以下のように書くこともできる
        // AllowOriginFunc: func(origin string) bool {
        //  return origin == "https://www.example.com:8080"
        // },
        // preflight requestで許可した後の接続可能時間
        // https://godoc.org/github.com/gin-contrib/cors#Config の中のコメントに詳細あり
        MaxAge: 24 * time.Hour,
    }))


    // ルーティング

    //TODO api/ は共通なのでグループ化
     router.GET("api/ping", testResponse)
     router.GET("api/env", envResponse)
     router.GET("api/db", dbResponse)
     

     router.GET("api/task/:id", getTask)
    //  router.GET("api/tasks", getTasks)
     router.POST("api/task", postTask)
    //  router.PUT("/somePut", PutTask)
    //  router.DELETE("/someDelete", DeleteTask)


    // ルーターを起動して 8000 でリクエストを待つ
    router.Run(":8000")
}


// シンプルなレスポンス
func testResponse(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
            "message": "ping テスト用のレスポンス返却でいい",
        })
}

// 環境変数の読み込みテスト
func envResponse(c *gin.Context) {
    // 環境変数を読み込む
	err := godotenv.Load(".env")
    if err != nil {
        fmt.Printf("読み込み出来ませんでした: %v", err)
	} 

    message := os.Getenv("SAMPLE_ENV")
    c.JSON(http.StatusOK, gin.H{
            "env": message,
        })
}


// タスクを定義
type Task struct {
    Id string  `gorm:"column:id"`
    Name  string  `gorm:"column:name"`
    isFinished bool  `gorm:"column:age"`
}


func getTask(c *gin.Context){
    db := gormConnect()

    id := c.Param("id")
    db.Where("ID = ?", id)

    task := Task{}
    db.Where("ID = ?", id).First(&task)
    c.JSON(http.StatusOK, task)
}

func postTask(c *gin.Context){
    // 動作確認用　curl -X POST localhost:8000/api/task -d 'name=aaa'
    task := Task{}

    name := c.PostForm("name")
    task.Name = name

    db := gormConnect()
    result := db.Create(&task) 

    c.JSON(http.StatusOK, result)
}

// db接続テスト
func dbResponse(c *gin.Context) {
    db := gormConnect()

    // TODO: dbの設定情報を取得して返す
    var users []Task
    db.Find(&users)
    defer db.Close()

    c.JSON(http.StatusOK, gin.H{
            "tasks": &users,})
}

func gormConnect() *gorm.DB {
     // 環境変数読み込み
    err := godotenv.Load(".env")
    if err != nil {
        fmt.Printf("読み込み出来ませんでした: %v", err)
    } 

    // DB接続設定
    DB_USER := os.Getenv("DB_USER")
    DB_PASS := os.Getenv("DB_PASS")
    DBNAME := os.Getenv("DB_NAME")
    HOST := "tcp(mysql:3306)"
    // "root:root@tcp(mysql:3306)/react-go-app"
    CONNECT := DB_USER + ":" + DB_PASS + "@" + HOST + "/" + DBNAME

    // DBに接続
    db, err := gorm.Open("mysql", CONNECT)

    if err != nil {
        panic(err.Error())
    }

     fmt.Println("db connected: ", &db)
    return db
}
