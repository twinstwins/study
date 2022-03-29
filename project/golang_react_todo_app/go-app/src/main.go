package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"

	"github.com/gin-gonic/gin"
)

// タスクを定義
type task struct {
    ID string  `json:"id"`
    name  string  `json:"name"`
    isFinished string  `json:"is_finished"`
    priority_num  int `json:"priority_num"`
}


func main() {
    // ルーターの初期化
    router := gin.Default()

    // ルーティング
     router.GET("api/ping", testResponse)
     
     
     router.GET("api/env", envResponse)


    // ルーターを起動して 8000 でリクエストを待つ
    router.Run(":8000")
}


func testResponse(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
            "message": "ping テスト用のレスポンス返却でいい",
        })
}

func envResponse(c *gin.Context) {
    // 環境変数を読み込む
	err := godotenv.Load(".env")
    if err != nil {
        fmt.Printf("読み込み出来ませんでした: %v", err)
	} 

    message := os.Getenv("SAMPLE_MESSAGE")
    c.JSON(http.StatusOK, gin.H{
            "env": message,
        })
}