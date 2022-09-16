require("dotenv").config({ path: "./src/config" });
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const aws = {
  bucketName: process.env.AWS_BUCKET_NAME,
  region: process.env.AWS_BUCKET_REGION,
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretKey: process.env.AWS_SECRET_ACCESS_KEY,
};

const s3 = new S3({ aws });

function uploadFile(file) {
  console.log("awais", file);
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: aws.bucketName,
    Body: fileStream,
    Key: file.filename,
  };
  return s3.upload(uploadParams).promise();
}

function getFile(fileKey) {
  console.log("file key", fileKey);
  const downloadParams = {
    Key: fileKey,
    Bucket: aws.bucketName,
  };

  return s3.getObject(downloadParams).createReadStream();
}

module.exports = { uploadFile, getFile };
