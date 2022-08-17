FROM node:16.13.1-alpine3.13

WORKDIR /api-demo/server

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]

