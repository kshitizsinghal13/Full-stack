import React from 'react'
import Child3 from './child3'

function Child2({data}) {
  return (
    <div>
      child 2 branch {data.branch}
        <Child3 data={data} />
    </div>
  )
}

export default Child2