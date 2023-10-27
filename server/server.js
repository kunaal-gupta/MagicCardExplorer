const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data in the request body

const {APIcall} = require('./cardAPI');

app.post('/hello', async function(req, res) {
   console.log("Server: Received POST request");
   console.log(req.body); // Access the JSON data sent in the request body

   const APIdata = await APIcall(req.body)
   res.send(APIdata)
   
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
