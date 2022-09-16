// * package imports
require("dotenv").config({ path: "/src/config" });
const mongoose = require("mongoose");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

// *imports
const file = require("./src/routes/file");
const posts = require("./src/routes/post");

const app = express();

// * Default middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

// * environment configuration
const port = process.env.PORT || 3000;

console.log(process.env.AWS_BUCKET_NAME);
console.log(process.env.AWS_BUCKET_REGION);
console.log(process.env.AWS_ACCESS_KEY_ID);
console.log(process.env.AWS_SECRET_ACCESS_KEY);

// * creating a web server
app.listen(port, () => console.log(`Listening on ${port}...`));

// * Connecting to database
mongoose
  .connect("mongodb://localhost:27017/s3")
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((err) => console.log(`Connection to mongodb failed ${err}`));

// * testing the api
app.use("/api/posts", posts);
