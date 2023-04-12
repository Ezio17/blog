FROM node:16.19-buster AS builder

WORKDIR /front-end

ENV DOMAIN=https://blog-ujed.onrender.com

COPY ./package.json ./

RUN yarn

COPY . .

RUN yarn build



FROM nginx:1.21.0-alpine as production

COPY --from=builder /front-end/dist /usr/share/nginx/html

RUN ls -la /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 443