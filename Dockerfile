FROM nginx:stable-alpine3.19-slim
COPY ./nginx.config /etc/nginx/conf.d/default.conf
COPY /dist/dice-tracker/browser/ /usr/share/nginx/html
EXPOSE 80

