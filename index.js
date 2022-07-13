

const fs = require("fs");


//object
const biodata = {
    name : "zeemal",
    age : 23,
    channel: "thapa technical",
};
 // 1: convert to json
 // 2: add in doosri file
 // 3: readfile
 // 4: convert back to oject origin
 // 5: console.log

 const jsonData = JSON.stringify(biodata);    //converting json to object done
//2:
//create file json.json and sending jsondata into that file and calling call back function for error and printing done in terminal
fs.writeFile('json1.json',jsonData, (err) => {
    console.log("done");
});

//3:
fs.readFile("json1.json","utf-8",(err, data) => {
    console.log("json conversion output:", data);
    //4:
    const orgdata = JSON.parse(data);
    //5:
    console.log("original data:", orgdata);

});




