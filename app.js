// * package imports
require("dotenv").config({ path: "/src/config" });
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// *imports
const file = require("./src/routes/file");

const app = express();

// * Default middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

// * environment configuration
const port = process.env.PORT || 3000;

// * creating a web server
app.listen(port, () => console.log(`Listening on ${port}...`));

// * testing the api
app.use("/", file);
