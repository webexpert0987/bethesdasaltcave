import { S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: process.env.SERVER_REGION!,
    credentials: {
    accessKeyId: process.env.SERVER_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SERVER_SECRET_ACCESS_KEY!,
  },
});

export default s3;
