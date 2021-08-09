### STAGE 1: Build ###
FROM node:12.14-alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
RUN ng build
#RUN npm run build

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html
EXPOSE 4200
