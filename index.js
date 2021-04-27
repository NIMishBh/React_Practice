const EncodeAsyncRead = require('./src/EncodeAsyncRead')
const EncodeAsyncWrite = require('./src/EncodeAsyncWrite')

EncodeAsyncRead("input.txt").then(data => {
  EncodeAsyncWrite("out.txt", data).then(
    console.log("Write successful in the Output File")
  )
  .catch(err => {
    console.log("Error in Writing : " + err)
  })
})
.catch(err => {
  console.error("Error in Reading : " + err);
})
