const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors()); 


app.get('/hello', function(req, res) {
   res.send("Hello World!");
});

app.post('/hello', function(req, res) {
   res.send("You just called the post method at '/hello'!\n");
});

app.listen(3002);
