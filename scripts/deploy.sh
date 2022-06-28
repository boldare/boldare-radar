#!/bin/bash

echo "📨 Upload files" # and remove non existing files
aws s3 sync ./public s3://$FRONTEND_BUCKET_NAME --delete --cache-control max-age=300,public

echo "💨 Invalidate cache"
aws cloudfront create-invalidation --distribution-id $FRONTEND_CLOUDFRONT_ID --paths "/*"
