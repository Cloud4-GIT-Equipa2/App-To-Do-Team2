FROM node:latest
RUN mkdir -p /usr/src/backend-node
WORKDIR /usr/src/app
COPY package.json /usr/src/backend-node/
RUN npm install
COPY . /usr/src/backend-node
EXPOSE 3000
CMD [ “npm”, “start” ]