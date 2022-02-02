resource "aws_instance" "sample" {
  ami = "ami-0e3861265a3a335cc"
  instance_type = "t3.micro"
}

provider "aws" {
  region = "ap-northeast-1"
}