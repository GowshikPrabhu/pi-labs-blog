const { BlobServiceClient } = require('@azure/storage-blob');

const connectStorage = async () => {
  let AZURE_STORAGE_CONNECTION_STRING = process.env.STORAGE_URI;

  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );

  console.log('\x1b[36m%s\x1b[0m', `Storage connected: ${blobServiceClient}`);
  return blobServiceClient;
};

module.exports = connectStorage;
