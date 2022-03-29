package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
)

func main() {
    // ルーターの初期化
    router := gin.Default()

    // ルーティング
     router.GET("api/ping", testResponse)
     
     router.GET("api/env", envResponse)
     
     router.GET("api/db", dbResponse)

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

// db接続テスト
func dbResponse(c *gin.Context) {
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
        c.JSON(http.StatusBadRequest, gin.H{
            "message": "接続失敗です",
        })
    }

    var users []Task
    db.Find(&users)
    defer db.Close()

    c.JSON(http.StatusOK, gin.H{
            "tasks": &users,
        })
}

