# ベースとなるDockerイメージ指定
FROM golang:latest

RUN apt-get update
# RUN apt-get git 

# GOPATHクリア
ENV GOPATH= 

RUN go mod init go

RUN go get -u github.com/gin-gonic/gin
RUN go get github.com/jinzhu/gorm
RUN go get github.com/go-sql-driver/mysql

WORKDIR /go/src

CMD ["go","run","main.go"]