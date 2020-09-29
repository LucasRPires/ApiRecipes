FROM node:alpine

RUN npm install -g nodemon
WORKDIR /usr/app

COPY package*.json /usr/app/
RUN npm install && mv /usr/app/node_modules /node_modules

COPY . /usr/app

EXPOSE 3000


CMD ["npm", "start"]