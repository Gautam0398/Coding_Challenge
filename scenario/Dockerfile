FROM node:20-alpine as build
  WORKDIR /app
  RUN npm install -g @angular/cli
  COPY package*.json ./
  RUN npm ci
  COPY . .
  EXPOSE 4200
  CMD [ "ng", "serve", "--host", "0.0.0.0", "--proxy-config", "proxy.conf.json" ]
