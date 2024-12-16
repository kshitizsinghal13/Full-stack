import React from 'react'

function Child3({data}) {
    console.log(data);
    
  return (
    <div>child 3 section {data.section}</div>
  )
}

export default Child3