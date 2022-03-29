package main

import "github.com/gin-gonic/gin"

func main() {
    r := gin.Default()
    r.GET("/api/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "ping テスト用のレスポンス返却でい",
        })
    })
    r.Run(":8000")
}