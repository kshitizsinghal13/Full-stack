const fs = require('fs');
function writeFile(){   
    try{
        fs.writeFile('data.txt','hello world',()=>{
            console.log("file written successfully");
        });
    }catch(err){
        console.log("error in writing file"+err);
    }
}

function readFile(){
    try{
        fs.readFile('data.txt','utf-8',(err,data)=>{
            console.log(data.toString());
        });
    }catch(err){
        console.log("error in reading file"+err);
    }
}

function unlinkFile(){
    try{
        fs.unlink('data.txt',()=>{
            console.log("file deleted successfully");
        });
    }catch(err){
        console.log("error in deleting file"+err);
    }
}


function appendFile(){
    try{
        fs.appendFile('data.txt', ' appended text', () => {
            
    console.log("Data appended successfully");
});
}catch(err){
    console.log("error in appending file"+err);
}
}

module.exports = {
    writeFile,
    readFile,
    unlinkFile,
    appendFile
};

// module.exports = {
//     writeFile:writeFile,
//     readFile: readFile,
//     unlink: unlink,
//     appendFile: appendFile
// };


