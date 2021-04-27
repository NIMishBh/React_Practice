const fs = require('fs');
const EncodeString = require('../utils/EncodeString');

module.exports = function EncodeFileAsyncWrite(outFile, data) {
  let dataEncodedStr = EncodeString(data);
  return new Promise((resolve, reject) =>{
    fs.writeFile(outFile, dataEncodedStr, err =>{
      if(err){
        return reject(err);
      }
      resolve("Data Written Successfully in the Output File");
    })
  });
}