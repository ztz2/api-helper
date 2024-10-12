FROM node:18.20.4-slim

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com

RUN npm install -g pnpm pm2

COPY packages ./packages
COPY scripts ./scripts
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --prefix packages/web
RUN pnpm install --prefix packages/server

RUN npm run build --prefix packages/web
RUN npm run build --prefix packages/server

EXPOSE 3210

WORKDIR /app/packages/server/dist
CMD ["pm2-runtime", "main.js"]
