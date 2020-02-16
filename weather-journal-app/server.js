// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

const server = app.listen(port, listening);
// callback
function listening() {
  console.log(`running on localhost: ${port}`);
}


// GET requests:

// Optional
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/all', sendData); //returns projectData

function sendData (request, response) {
    console.log(`project data: ${projectData}`);
    response.send(projectData);
};


// Post Requests:
app.post('/add', addProjectData);

function addProjectData(req, res) {
  let temperature = req.body.temperature;
  let date = req.body.date;
  let user_response = req.body.user_response;
  projectData.temperature = temperature;
  projectData.date = date;
  projectData['User Response'] = user_response;

  console.log(projectData);
  res.end("Post Successfull");

};
