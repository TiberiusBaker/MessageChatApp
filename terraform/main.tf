terraform {
    required_providers {
        aws = {
        source  = "hashicorp/aws"
        version = "~> 3.0"
        }
    }
}

//Create postgresql database in aws rds
provider "aws" {
    profile = "Main"
    region = "us-west-2"
}

resource "aws_db_instance" "default" {
    allocated_storage    = 20
    storage_type         = "gp2"
    engine               = "postgres"
    engine_version       = "15"
    instance_class       = "db.t2.micro"
    username             = "fill"
    password             = "Fill"
    parameter_group_name = "default.postgres11"
}

