// // // console.log("hello love");
// // // let a=12
// // // console.log(a)
// // // if(a>10){
// // //     let b=30;
// // //     console.log("hi",a);
// // // }
// // // console.log(a)












// // let a='12';
// // let b=12;
// // if(a==b){
// //     console.log("cheese maggie");
// // }
// // else{
// //     console.log("loki ki sabji")
// // }
// // let d=function(str=" matar k saath khayega hastar"){
// //     console.log("aalu ki paani vaali sabji"+str);
// // }
// // d();



// // function sum(a,b,c=12){
// //     return a+b+c
// // }
// // let total=sum(50,19)
// // console.log("hastar daadi k saath karega "+ total)

// console.dir(document);
// const div=document.getElementsByClassName("parent");
// console.log(div);
// // div[0].innerText="king";
// div[0].innerHTML="<h2 style=color:red>kshitiz</h2>";

// const h1=document.createElement("h1");
// h1.innerText="element is created by dom";
// h1.style.backgroundColor="pink"
// div[0].appendChild(h1);
// console.log(h1);




// const img=document.createElement("img");
// img.src='./Q.jpg';
// img.setAttribute("height","300px");
// div[0].appendChild(img)
// div[0].removeChild(img)
// console.log(img)


const button=document.getElementById("button");
console.log(button)
const display=document.getElementById("disp");
console.log(display)

getdata=()=>{
    console.log("hello bitch");
    display.innerHTML="<h3 style=color:blue>I love you miss </h3>";

}
button.addEventListener("click",getdata); 