# angular-mongo-node
This is an app that connects with a mongo database through AngularJS. NodeJS is used on the backend


Description

This app is based on the " real-time polls application with Node.js, Express.js, AngularJS, and MongoDB" by Joe Lennon  (http://www.ibm.com/developerworks/library/wa-nodejs-polling-app/).
It uses NodeJS on the backend to connect with mongo dababase, then sends the data to the frontend. On the frontend, the JSON API of AngularJS receives the data
from backend, and use controllers to send data to the views. The backend codes written in Node.js are wrapped in an Express.js framework.

app.js: the server file, to start the application, run: node app.js, and it will have the app on http://localhost:3000 by default or at the port number specified in app.js.

routes/index.js: this file includes a function that connects with the mongo database, a function that saves the retrieved data in JSON format that will be sent to the frontend, and a function that will assign views to different urls.

models/: this folder has schema for data.

/public/javascript: this is the folder that saves javascript code. Here the app.js is just the router that assign controllers to different urls. controller.js has controllers for the views as in typical AngularJS applications. service.js implements the JSON API that receives the data sent from the server.


