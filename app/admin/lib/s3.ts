import { S3Client } from "@aws-sdk/client-s3";
const bucketName = process.env.SERVER_BUCKET_NAME!;
const region = process.env.SERVER_REGION!;
const accessKeyId = process.env.SERVER_ACCESS_KEY_ID!;
const secretAccessKey = process.env.SERVER_SECRET_ACCESS_KEY!;

const s3 = new S3Client({
    region: region,
    credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export default s3;
