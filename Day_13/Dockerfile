FROM node:18-alpine AS builder

WORKDIR /app
COPY app /app

FROM nginx:alpine

COPY --from=builder /app /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html /var/cache/nginx /var/run /etc/nginx

USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]