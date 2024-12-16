import React from 'react'
import Child2 from './child2'

function Child1({child1data}) {
    console.log(child1data)

  return (
    <div>child1
        Name:{child1data.Name}
        <Child2 data ={child1data}/>
    </div>
  )
}

export default Child1