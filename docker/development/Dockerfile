FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package*.json .

COPY . .

EXPOSE 3000

CMD [ -d "node_modules" ] && npm run dev || npm install && npm run dev
