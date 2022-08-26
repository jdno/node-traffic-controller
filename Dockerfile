FROM node:18-alpine

WORKDIR /atc

COPY package.json package-lock.json /atc/
RUN npm install
COPY . /atc/

ENTRYPOINT ["npx", "ts-node", "src/main.ts"]