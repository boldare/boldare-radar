#!/bin/bash

echo "📨 Upload files" # and remove non existing files
aws s3 sync ./build s3://$FRONTEND_BUCKET_NAME/tech-radar/ --delete --cache-control max-age=300,public

echo "💨 Invalidate cache"
aws cloudfront create-invalidation --distribution-id $FRONTEND_CLOUDFRONT_ID --paths "/*"
