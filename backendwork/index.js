// const {sum,multiplication}=require('./logic');
// const result=sum(10,20);
// const result2=multiplication(10,20);
// console.log("sum of two numbers is "+result);
// console.log("multiplication of two numbers is "+result2);

const {datawrite, readfile,appendfile,unlinkfile} = require('./usefilesync/fileoperation');

datawrite();

appendfile();

readfile();

unlinkfile();

console.log("file operation completed");