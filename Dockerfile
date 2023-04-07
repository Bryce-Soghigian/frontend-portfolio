# syntax=docker/dockerfile:1
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .
RUN npm run build

FROM nginx:1.21-alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

