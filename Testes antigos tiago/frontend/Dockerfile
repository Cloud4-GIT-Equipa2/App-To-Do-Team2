FROM node:12.7-alpine AS build

ENV MONGODB_URI='mongodb://localhost:27017/teste'


WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build