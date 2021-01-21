FROM node:latest



ENV MONGODB_URI='mongodb://localhost:27017/teste'

WORKDIR /usr/src/backend-node
COPY . /usr/src/backend-node/
RUN npm install
COPY . /usr/src/backend-node
EXPOSE 3000
CMD [ “npm”, “start” ]