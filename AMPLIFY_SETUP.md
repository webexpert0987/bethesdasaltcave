# AWS Amplify Deployment Guide

## Required Environment Variables for AWS Amplify

Make sure to configure these environment variables in AWS Amplify Console:

### MongoDB Configuration
- `MONGODB_URI` - MongoDB connection string

### JWT Configuration  
- `JWT_SECRET` - Secret key for JWT tokens

### AWS S3 Configuration
- `SERVER_ACCESS_KEY_ID` - AWS access key for S3
- `SERVER_SECRET_ACCESS_KEY` - AWS secret access key for S3
- `SERVER_REGION` - AWS region (e.g., us-east-2)
- `SERVER_BUCKET_NAME` - S3 bucket name (e.g., bethesdasaltcave)

## Steps to Add Environment Variables:

1. Go to AWS Amplify Console
2. Select your app > Settings > Environment variables
3. Add each variable above with their corresponding values
4. Re-deploy the application

## Deployment Steps:

1. Commit all changes to git
2. Push to your connected repository (GitHub, GitLab, etc.)
3. Amplify will automatically detect changes and deploy
4. Monitor the deployment in AWS Amplify Console
