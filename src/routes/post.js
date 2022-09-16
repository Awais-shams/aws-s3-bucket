const express = require("express");

const uploadPost = require("../controllers/postController");

const upload = require("../middlewares/multer");

const router = express.Router();

router.post("/", upload.single("image"), uploadPost);

module.exports = router;
