package main

import (
	"example.com/m/v2/model"
	"example.com/m/v2/router"
	"github.com/labstack/echo/v4"
)

func main() {
	sqlDB := model.DBConnection()
	defer sqlDB.Close()
	e := echo.New()
	router.SetRouter(e)
}
