const fs = require('fs')

function incrementChar(str) {
  let final_txt = "";
  console.log("Text in File: " + str);
  for (var i = 0; i < str.length; i++) {
    let nextChar = str.charAt(i);
    if (nextChar === 'z') {
      final_txt += String.fromCharCode(97);
    }
    else if (nextChar === 'Z') {
      final_txt += String.fromCharCode(65);
    }
    else {
      final_txt += String.fromCharCode(nextChar.charCodeAt() + 1);
    }
  }
  return final_txt;
}

//Without Sync

console.log('Starting to Read without Sync...')
fs.readFile('text.txt', (err, data) => {
  let str = data.toString();
  let text = "";
  console.log('Read Finished with fs.readFile()');
  text = incrementChar(str)
  console.log("Text to be entered in File : " + text);
  fs.writeFile('text.txt', text, err => {
    if (err) {
      console.error(err);
      return
    }
    console.log("File Updated with fs.writeFile()");
  })
})

//With Sync

console.log("Reading File using readFileSync()")
var data = (fs.readFileSync("text.txt")).toString();
console.log("File Read complete with readFileSync() ")
var text = incrementChar(data);
console.log("Writing file with: " + text + " using writeFileSync()")
fs.writeFileSync('text.txt', text)
console.log("Writing complete using writeFileSync()")



