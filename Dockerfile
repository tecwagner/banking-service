FROM node:17-alpine as builder

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@9.0.0

USER node

WORKDIR /home/node/app

CMD npm run start:docker:dev
