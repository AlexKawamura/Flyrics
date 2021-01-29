require('dotenv').config();

const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.once('open', () => {
  console.log("MongoDB database connection established successfully!");
}).catch(error => {
  console.log(error);
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const apis = require("./api");
// app.use("/api", apis);

// Connect to Mongo
// mongoose.connect(process.env.MONGO_DB, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err));
const musicsRouter = require('./routes/music');
const usersRouter = require('./routes/user');

app.use('/musics', musicsRouter);
app.use('/users', usersRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));