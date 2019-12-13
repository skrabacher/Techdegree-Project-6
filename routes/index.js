const express = require('express'); //requires express
const router = express.Router();
const data = require('../data.json'); // requires the data.json file 
const projectData = data.projects; //specifically grabs just the array value from the data.json file

//HOME PAGE ROUTE
router.get('/', function(req, res, next) { //sets route path to root 
  res.render('index', { projectData }); //projectDAta defines the local vairables for the index.pug view //render method sends index.pug file contents to the client (no need for .pug file ext because pug has been set as the view engine in app.js so the program knows to reference a file with the .pug ext)
});

//PROJECT PAGE ROUTE
router.get('/projects/:id', function(req, res, next) { //sets route path to /projects/<id#>
  const projectId = req.params.id; //stores the value of an id route parameter (aka the project id value specified in the route path, aka the url user entered #)
  console.log("projectId: ", projectId);
  const project = projectData.find( ({ id }) => id === +projectId ); //holds the project obj to pass into the view (uses the find method to return the project object whose id value matches the id parameter in line above)
  console.log("project: ", project);
  
  if (project) { //if statement to set up handling of error if not finding project in else clause
    // 2. Pass the recipe data to the 'recipe' template
    res.render('project', { project }); //passes single recipe obj to recipe.pug
  } else { //else clause for handling not finding project
    res.sendStatus(404);
  }
});

//ABOUT PAGE ROUTE
router.get('/about', function(req, res, next) {
    res.render('about')
});

module.exports = router; //makes available to other files when router is called
