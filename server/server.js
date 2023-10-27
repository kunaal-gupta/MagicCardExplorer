const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); 


app.get('/hello', function(req, res) {
   res.send("Welcome to the server page!");
});

app.listen(3001);
