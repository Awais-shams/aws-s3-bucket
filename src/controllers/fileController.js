const { uploadFile, getFile } = require("../../s3");

async function fileUploading(req, res) {
  console.log(req.file);
  try {
    const result = await uploadFile(req.file);
    console.log(result);
    res.send({ imagePath: `/${result.Key}` });
  } catch (err) {
    res.status(404).send(err);
  }
}

async function getUploadedFile(req, res) {
  const key = req.params.id;
  console.log("awaosssssssssss", key);
  //   console.log(req.file);
  try {
    const readStream = await getFile(key);
    console.log(readStream);
    readStream.pipe(res);
  } catch (err) {
    res.status(404).send(err);
  }
}

module.exports = { fileUploading, getUploadedFile };
