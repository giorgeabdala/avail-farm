FROM node:20.11.0

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm i

ENTRYPOINT ["pnpm", "run", "start"]
