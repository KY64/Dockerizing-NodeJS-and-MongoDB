# Simple Docker Application
This is a simple implementation of docker. I build 2 containers from 2 images, NodeJS and MongoDB. After that, I connect both with using `docker network`

## How to run
#### 1. Build image
Run `docker build -t node-app:1.0 .`
#### 2. Build container and integrate it
Run `docker-compose up`

## NOTES
> If there is an error when running `docker` command try add `sudo` before it (i.e `sudo docker build` )