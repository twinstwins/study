package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

// コントローラー

// ホーム
func helloWorldPage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World, \n\nGoによるAPI返信です！")
}

// index
func returnAllItems(w http.ResponseWriter, r *http.Request) {
	// TODO: 全件を返す
}

// show
func returnSingleItem(w http.ResponseWriter, r *http.Request) {
	// TODO: 1件を返す
}

// コントローラーの処理をまとめる
func handleRequests() {
	myRouter := mux.NewRouter().StrictSlash(true)
	myRouter.HandleFunc("/", helloWorldPage)
	myRouter.HandleFunc("/items", returnAllItems)
	myRouter.HandleFunc("/items/{id}", returnSingleItem)
	log.Fatal(http.ListenAndServe(":8000", myRouter))
}

func main() {
	handleRequests()
}
