const express = require('express'); 
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express(); 
const PORT = 80;

const testRouter = require('./src/routes/test.route');

app.use(cors())
app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use('/test', testRouter);

app.get("/status", (request, response) => {
    const status = {
       "status": "running"
    };
    
    response.send(status);
});

 /* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({'message': err.message});

    return;
});

const dbService = require('./src/services/db.service.js');
dbService.createTable();

  
app.listen(PORT, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ PORT) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);