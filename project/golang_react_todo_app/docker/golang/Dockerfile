# ベースとなるDockerイメージ指定
FROM golang:latest

RUN apt-get update
# RUN apt-get git 

# GOPATHクリア
ENV GOPATH= 

RUN go mod init go

# フレームワーク
RUN go get -u github.com/gin-gonic/gin

# DB系
RUN go get github.com/jinzhu/gorm
RUN go get github.com/go-sql-driver/mysql

# 環境変数を扱う
RUN go get github.com/joho/godotenv

WORKDIR /go/src

CMD ["go","run","main.go"]