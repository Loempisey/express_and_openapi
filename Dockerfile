FROM node:16.13.1-alpine3.13

WORKDIR /express_and_openapi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8888

CMD [ "npm", "run", "dev" ]