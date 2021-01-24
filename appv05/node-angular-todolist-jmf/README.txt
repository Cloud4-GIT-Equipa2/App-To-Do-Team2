# node-angular-todolist


How to run this app:

1st). Clone the repo into a local folder;

2nd). Run the command line inside the folder with the "docker-compose" file;

3rd). Run the cmd: "docker-compose up -d"

4th). Test the app on: "http://localhost:4200"



# MAIN-FOLDER

## "docker-compose.yml":

Defined the container names for "frontend", "backend" and "mongodb".

Added the link for the "localhost:container" ports.


Linked the "frontend" service to the "backend" and this last one to the "mongodb".


Added the "mongodb" admin password and username along with the database name under the "mongodb" service.


Last but not least, created a network named "appnetwork" so the containers can communicate.



# Backend

## Mongodb

You have to run a mongodb in order to use the app.

Don't panic, just follow the 4 steps described above and everything should be fine.
Everything is setup and ready to go.


## Nodejs

Created "Dockerfile" on the "/backend" folder with the following attributes:

## "dockerfile":


FROM node:15.6.0             #BASE IMAGE FOR THE BACKEND BUILD;

WORKDIR /backend             #WORK DIRECTORY INSIDE THE NODE CONTAINER;

COPY . .                     #TO COPY FOLDER CONTENTS TO THE PREVIOUSLY CREATED WORKDIR;

RUN npm install              #TO INSTALL DEPENDENCIES INSIDE THE CONTAINER;

EXPOSE 3000                  #SELF EXPLANATORY, TO OPEN PORT 3000;

CMD { "npm", "start" }       #TO START THE SERVICE;


Still inside the "/backend" folder, created the ".env" file and changed the server value from "127.0.0.1:27017" to "mongodb:27017".
Additionally the "JWT_SECRET" var was also created with the value "todolistsecret".



# Frontend


## Angular

Created "Dockerfile" on the "/frontend" folder with the following attributes:

## "dockerfile":


FROM node:12.7-alpine AS build            #BASE IMAGE FOR THE FRONTEND BUILD;

WORKDIR /usr/src/app                      #WORK DIRECTORY INSIDE THE ANGULAR CONTAINER;

COPY . .                                  #TO COPY FOLDER CONTENTS TO THE PREVIOUSLY CREATED WORKDIR;

RUN npm install                           #TO INSTALL DEPENDENCIES INSIDE THE CONTAINER;

RUN npm install -g @angular/cli           #TO BE ABLE TO RUN THE NEXT COMMAND;

RUN ng build                              #TO BUILD THE FRONTEND ANGULAR APP;



FROM nginx:alpine                         #BASE IMAGE FOR OUR WEBSERVER;

COPY nginx.conf /etc/nginx/nginx.conf     #TO COPY THE CUSTOM "nginx.conf" FILE INTO THE NGINX CONF DIRECTORY;

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html    #TO COPY OUR HTML FRONTEND PAGE;

EXPOSE 4200                               #SELF EXPLANATORY, TO OPEN PORT 4200



The file "environments.ts" inside "/frontend/src/environments" was not altered since the port 3000 (for the api) was already defined.





