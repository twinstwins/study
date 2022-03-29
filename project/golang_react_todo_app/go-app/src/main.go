package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// タスクを定義
type album struct {
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

    // ルーターを起動して 8000 でリクエストを待つ
    router.Run(":8000")
}

func testResponse(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
            "message": "ping テスト用のレスポンス返却でいい",
        })
}