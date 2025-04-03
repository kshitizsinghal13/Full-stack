const fs=require('fs');

function datawrite(){
    try{
        fs.writeFileSync('hello.txt','I love you miss ____');
        console.log("file written successfully");
    }catch(err){
        console.log("error in writing file"+err);
    }
}
function readfile(){
    try {
        const rf = fs.readFileSync('hello.txt','utf-8');
        console.log(rf);
    } catch(err) {
        console.log("error in reading file"+err);
    }
}


function appendfile() {
    try {
        fs.appendFileSync('hello.txt', 'This is appended text');
        console.log("Content appended successfully");
    } catch(err) {
        console.log("error in appending file"+err); 
    }
}

function unlinkfile() {
    try {
        fs.unlinkSync('hello.txt');
        console.log("File deleted successfully");
    } catch(err) {
        console.log("error in deleting file"+err);
    }
} 




module.exports = {
    datawrite,
    readfile,
    appendfile,
    unlinkfile
}


