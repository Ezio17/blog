FROM node:16.19-buster AS builder

WORKDIR /front-end

ENV DOMAIN=https://blog-ujed.onrender.com

COPY ./front-end/package.json ./

RUN yarn

COPY ./front-end .

RUN yarn build


FROM node:14-alpine

RUN apk add --no-cache nginx

# Copy the Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy the frontend folder
COPY --from=builder /front-end/dist /usr/share/nginx/html

# Copy the Strapi folder
COPY ./strapi /app/strapi

# Install dependencies for Strapi
WORKDIR /app/strapi
RUN yarn install
RUN yarn build

CMD sh -c 'yarn start /app/strapi & nginx -g "daemon off;"' --user nginx:nginx

# Expose ports for Nginx and Strapi
EXPOSE 3000
EXPOSE 1337



