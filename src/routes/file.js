const express = require("express");

const {
  fileUploading,
  getUploadedFile,
} = require("../controllers/fileController");
const upload = require("../middlewares/multer");

const router = express.Router();

router.post("/", upload.single("image"), fileUploading);
router.get("/:id", getUploadedFile);

module.exports = router;
