const express = require('express'); //requires express
const projectData = require('./data.json'); // requires the data.json file 
const path = require('path'); //module provides utilities for working with file and directory paths. 
const bodyParser = require('body-parser'); //body parser reads values and places them on the request object on a property called body (req.body)

const app = express();

//view engine set up
app.set('views', path.join(__dirname, 'views'));//tells express the file path for the folder where the different views templates will be stored
app.set('view engine', 'pug'); // tells express we will be using pug templates 

// app.use(bodyParser.json()); //
// app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public'))); //tells express where to access the static files

//route for home page
app.get('/', (req, res) => { //to create a route. get method takes 2 parameters. a PATH and a CALLBACK
    //1st parameter is the location/PATH parameter: / = root route(home/landing page of a website)
    //2nd parameter is an anonymous CALLBACK function that takes a request object and a response obj
    res.render('index');//render method sends index.pug file contents to the client (no need for .pug file ext because pug has been set as the view engine so the program knows to reference a file with the .pug ext)
});

app.listen(3000, () => { //FIRST parameter is the port number. (3000) type "localhost:3000" into browser and "node app.js" into the command line to run the app and activatete express server
    console.log('The app is running on localhost:3000');
}); 
//The `app.listen` method can take a parameter, which will tell the server: which port to serve the application on