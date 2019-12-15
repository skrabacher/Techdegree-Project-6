const express = require('express'); //requires express
const app = express();

//const data = require('./data.json'); // requires the data.json file 
//const projectData = data.projects;
const path = require('path'); //module provides utilities for working with file and directory paths. 
//const bodyParser = require('body-parser'); //body parser reads values and places them on the request object on a property called body (req.body)
const indexRouter = require('./routes/index'); //requires the index.js file in the routes folder


//VIEW ENGINE SET UP
app.set('views', path.join(__dirname, 'views'));//tells express the file path for the folder where the different views templates will be stored
//__dirname has value of the absolute path of the directory containing the currently executing file
app.set('view engine', 'pug'); // tells express we will be using pug templates 

app.use('/static', express.static(path.join(__dirname, 'public'))); //tells express where to access the static files(images, stylesheets, etc)
app.use('/', indexRouter); //requires /routes/index for root path in app.js

//ERROR HANDLERS
app.use((req, res, next) => { //404 handler > if request isn't picked up by one of the route handlers, users will get this error in the window
    //const err = new Error("404 not found.");
    next(err); //when an object is passed into next, express jumps to the first middleware with 4 parameters 
}, (err, req, res, next) => {
    err.status = 500;
    res.locals.error = err;
    res.status(err.status);// error status will show in dev tools in browser
    res.render('error');
});

//Runs the express server on port 4000
app.listen(3000, () => { //FIRST parameter is the port number. (3000) type "localhost:3000" into browser and "node app.js" into the command line to run the app and activatete express server
    console.log('The app is running on localhost:3000');
}); 
//The `app.listen` method can take a parameter, which will tell the server: which port to serve the application on