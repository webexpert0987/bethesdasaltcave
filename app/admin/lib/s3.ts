import { S3Client } from "@aws-sdk/client-s3";
const bucketName = process.env.NEXT_PUBLIC_SERVER_BUCKET_NAME!;
const region = process.env.NEXT_PUBLIC_SERVER_REGION!;
const accessKeyId = process.env.NEXT_PUBLIC_SERVER_ACCESS_KEY_ID!;
const secretAccessKey = process.env.NEXT_PUBLIC_SERVER_SECRET_ACCESS_KEY!;

const s3 = new S3Client({
    region: region,
    credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey,
  },
});

export default s3;
