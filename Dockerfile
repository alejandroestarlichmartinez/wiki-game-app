FROM node:19-alpine3.15 as dev
EXPOSE 3000:3000
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]

FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --frozen-lockfile

FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /node_modules ./node_modules
COPY . .
RUN npm build

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install --prod --frozen-lockfile


FROM node:19-alpine3.15 as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY . .
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]