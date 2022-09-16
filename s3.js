require("dotenv").config({ path: "./src/config" });
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const Post = require("./src/models/postModel");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region,
});

async function uploadFile(req) {
  // console.log("Awaissss", req.file);

  const uploadParams = {
    Bucket: bucketName,
    Body: req.file.buffer,
    Key: req.file.originalname,
    ContentType: req.file.mimetype,
  };
  // Send the upload to S3
  await s3Client.send(new PutObjectCommand(uploadParams));

  const storePost = await new Post({
    post: req.file.originalname,
    desc: req.body.desc,
  });

  storePost.save();

  return storePost;
}


module.exports = { uploadFile };
