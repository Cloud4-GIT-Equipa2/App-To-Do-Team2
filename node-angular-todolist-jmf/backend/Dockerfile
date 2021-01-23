FROM node:15.6.0
WORKDIR /backend
COPY . .
#COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]