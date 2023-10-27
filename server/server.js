const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data in the request body

app.post('/hello', function(req, res) {
   console.log("Received POST request");
   console.log(req.body, req.params); // Access the JSON data sent in the request body
   res.send('hi')
   
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
