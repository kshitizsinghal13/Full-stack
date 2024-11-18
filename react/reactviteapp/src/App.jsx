import React from 'react'
import Student from './Student'
import logo from './logo.jpg';
import Studentstate from './Studentstate';

function App() {
  let a=69;
  const mystyle={
    backgroundColor:"lightblue",
    color:"green"
  }

 const studentdata=[{
  college:"abesec",
  name:"sachin",
  branch:"CIVIL",
  roll:"123",
  sec:"asdfg",
  pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
 },
 {
  college:"mg",
  name:"maheep",
  branch:"CIVIL",
  roll:"123",
  sec:"asdfg",
  pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
 },
 {
  college:"abbgesec",
  name:"kullu",
  branch:"CIVIL",
  roll:"123",
  sec:"asdfg",
  pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
 }


]



  return (
    // <div style={mystyle}>ABES Engineering College
    //   <div style={mystyle}>{a}</div>
    
    //   <div style={{color:"pink",backgroundColor:"red",display:"flex"}}>
    //     <Student data={studentdata[2]}/>
    //     <Student data={studentdata[1]}/>
    //     <Student data={studentdata[0]}/>
    //     {/* <Student college="ABES ENGINEERING COLLEGE" name="Kshitiz" roll="91" branch="CSE" sec="Charizard" pic={<img src={logo} height={100} width={120}/>}/>
    //     <Student  name="Nayan" roll="69" branch="ME" sec="Nalle" pic={<img src={logo} height={100} width={120}/>}/>
    //     <Student college="ABES ENGINEERING COLLEGE" name="Chauhan" roll="88" branch="Evil" sec="Tocopee" pic={<img src={logo} height={100} width={120}/>}/>
    //   */}
    //   </div>


      
    // </div>
    <Studentstate/>

    
  )
}



export default App