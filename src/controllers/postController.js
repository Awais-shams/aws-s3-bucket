const { uploadFile } = require("../../s3");

async function uploadPost(req, res) {
  try {
    const result = await uploadFile(req);
    console.log(result);
    res.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
}

// async function getUploadedFile(req, res) {
//   const key = req.params.id;
//   console.log("awaosssssssssss", key);
//   //   console.log(req.file);
//   try {
//     const readStream = await getFile(key);
//     console.log(readStream);
//     readStream.pipe(res);
//   } catch (err) {
//     res.status(404).send(err);
//   }
// }

module.exports = uploadPost;
