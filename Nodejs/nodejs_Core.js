
const fs=require('fs');
//creating a new file
fs.writeFileSync('read.txt',"welcome to the world of nodejs");
//Updating 
fs.writeFileSync('read.txt',"Not nowwww");

//adding extra data
fs.appendFileSync('read.txt',"How are u ? I am fine and you?");

//buffer data
const buf_data=fs.readFileSync('read.txt');
//console.log(buf_data);

//original data
const org_data=buf_data.toString();
console.log(org_data);

fs.renameSync("read.txt","readWrite.txt");
