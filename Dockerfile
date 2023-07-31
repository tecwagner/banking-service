FROM node:17-alpine3.12 as builder

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@latest

USER node

WORKDIR /home/node/app
