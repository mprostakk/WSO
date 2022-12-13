FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g ts-node
RUN npm install -g nodemon
RUN npm install

EXPOSE 3000

CMD [ "node", "server.ts" ]
