FROM node:20-alpine

WORKDIR /octopus-front

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build \
    && rm -rf ./src \
    && rm -rf ./node_modules