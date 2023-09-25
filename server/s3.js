import dotenv from "dotenv";
import fs from "fs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// import S3 from "aws-sdk/clients/s3";
const S3 = require("aws-sdk/clients/s3");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

//uploads a file to s3

export function uploadFile(file) {
  const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    key: file.filename,
  };

  return s3.upload(uploadParams).promise();
}

//downloads a file from s3
