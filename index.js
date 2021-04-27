const EncodeAsyncRead = require('./src/EncodeAsyncRead')
const EncodeAsyncWrite = require('./src/EncodeAsyncWrite')

EncodeAsyncRead("input.txt").then(data => {
  EncodeAsyncWrite("out.txt", data).then(data => {
    console.log("Write successful in the Output File")
  })
  .catch(err =>{
    console.log(err)
  })
})
.catch(err => {
  console.error(err);
})
