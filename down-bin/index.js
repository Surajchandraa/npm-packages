const https = require('https');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

function downloadFile(url) {
  const parsedUrl = new URL(url);
  const filename = path.basename(parsedUrl.pathname); // Extract filename from URL path

  https.get(url, (response) => {
    const contentType = response.headers['content-type'];
    const isHtml = contentType && contentType.startsWith('text/html');
    const isBinaryContent = contentType && contentType.startsWith('application');

    if (isHtml) {
      console.error('The provided URL points to HTML content, not a downloadable file.');
      return;
    }

    if (!isBinaryContent) {
      console.error('The provided URL does not point to a binary file.');
      return;
    }

    const file = fs.createWriteStream(filename);

    response.pipe(file);

    file.on('finish', () => {
      file.close(() => {
        console.log(`File downloaded as ${filename}`);
      });
    });
  }).on('error', (err) => {
    console.error('Error downloading file:', err.message);
  });
}


module.exports=downloadFile;
