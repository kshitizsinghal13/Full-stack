import React from 'react'
import Student from './Student'

function App() {
  let a=69;
  const mystyle={
    backgroundColor:"lightblue",
    color:"green"
  }
  return (
    <div style={{color:'purple'}}>ABES Engineering College
      <div style={mystyle}>{a}</div>
      <div>
        <Student />
      </div>

    </div>

    
  )
}

export default App