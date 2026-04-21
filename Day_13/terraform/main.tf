terraform {
  required_version = ">= 1.0"
}

provider "local" {}

resource "local_file" "deployment" {
  filename = "deployment.txt"
  content  = "Infrastructure Created Successfully!"
}