const fs = require('fs');

module.exports = function EncodeFileAsyncRead(inFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(inFile, { encoding : 'ascii' }, (err,data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}