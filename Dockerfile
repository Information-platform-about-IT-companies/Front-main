FROM node:20.2-alpine AS stage1-builder

WORKDIR /octopus-front

COPY package*.json ./

RUN npm сi

COPY . ./

RUN npm run build \
    && rm -rf ./src \
    && rm -rf ./node_modules


