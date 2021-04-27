const EncodeAsyncRead = require('./src/EncodeAsyncRead')
const EncodeAsyncWrite = require('./src/EncodeAsyncWrite')

/**Using Async-Await */

const Encode = async (inFile, outFile) => {
  try {
    const data = await EncodeAsyncRead(inFile);
    try {
      const msg = await EncodeAsyncWrite(outFile, data);
      console.log(msg);
    }
    catch (err) {
      console.log("Error in Writing : " + err);
    }
  }
  catch (err) {
    console.error("Error in Reading : " + err);
  }
}

Encode("input.txt", "out.txt");

/**Using .then */

  // EncodeAsyncRead("input.txt").then(data => {
  //   EncodeAsyncWrite("out.txt", data).then(
  //     console.log("Write successful in the Output File")
  //   )
  //   .catch(err => {
  //     console.log("Error in Writing : " + err)
  //   })
  // })
  // .catch(err => {
  //   console.error("Error in Reading : " + err);
  // })