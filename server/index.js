const express = require('express');
const dotenv = require('dotenv');
// const db = require("./configs/dbConnection");
const cors = require("cors");
const route = require('./routers');

dotenv.config({ path: "../.env" });
app = express();

// Database connection
// db.connect();

// Parsing body request
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

/* ERROR: Access to XMLHttpRequest at 'http://localhost:5000/' from origin 'http://localhost:3000' has been blocked by CORS policy:
No 'Access-Control-Allow-Origin' header is present on the requested resource */
// FIX: use cors middleware to allow cross-origin requests
app.use(cors());

/* Routing */
route(app);

app.listen(process.env.SERVER_PORT, process.env.HOSTNAME, () => {
  console.info(
    `Server running at http://${process.env.HOSTNAME}:${process.env.SERVER_PORT}`
  );
});