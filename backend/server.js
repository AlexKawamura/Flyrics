const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT, function() {
  console.log('Server is running on Port: ' + PORT);
});