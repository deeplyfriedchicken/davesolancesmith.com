FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN apk update && apk upgrade && apk add --no-cache git

RUN git config --global user.email "kevin.a.cunanan@gmail.com" && git config --global user.name "Kevin Cunanan"