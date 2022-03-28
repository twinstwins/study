FROM golang:alpine

RUN apk update

RUN apk add git

RUN apk add alpine-sdk
COPY ./go-app /app/go
WORKDIR /app/go

RUN	go mod init example.com/m/v2

# RUN go build -o main .

# CMD [ "/app/go/main" ]

RUN apk update
RUN apk add --no-cache git
RUN go get -u github.com/gin-gonic/gin 
# RUN go get -u github.com/golang/dep/cmd/dep
# RUN dep ensure

# CMD gin -i run

RUN go run main.go