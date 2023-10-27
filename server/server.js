const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data in the request body

const {APIcall} = require('./cardAPI');

app.post('/hello', async function(req, res) {
//    console.log("Server: Received POST request");
//    console.log('Request from client', req.body, req.body.message, req.body.Topic); // Access the JSON data sent in the request body
    
   const APIdata = await APIcall(req.body.message, req.body.Topic)
   if (APIdata != -1) {
    res.send(APIdata)}
   
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
