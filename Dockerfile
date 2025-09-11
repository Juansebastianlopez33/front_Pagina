FROM node:18-alpine AS builder

WORKDIR /app

# 1. Recibe el argumento con el nombre exacto que usa Vite
ARG VITE_API_URL
# 2. Lo establece como una variable de entorno
ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:1.23-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
