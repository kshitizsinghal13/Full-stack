import React from 'react'
import './student.css';
function Student(data) {
  return (
    <div className='icard'>
        {/* {
            JSON.stringify(data.data)
        } */}
        <table>
            <tbody>
                <tr style={{backgroundColor:"magenta"}}>
                    <td colSpan={2}>{data.data.college}</td>
                </tr>
                <tr>
                <td colSpan={2}><img src={data.data.pic} height={100} width={110}/></td>


                </tr>



                <tr>
                    <td>Name:</td>
                    <td>{data.data.name}</td>
                </tr>
                <tr>
                    <td>Branch:</td>
                    <td>{data.data.branch}</td>
                </tr>
                <tr>
                    <td>Roll number:</td>
                    <td>{data.data.roll}</td>
                </tr>
                <tr>
                    <td>Section:</td>
                    <td>{data.data.sec}</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
// Student.defaultProps={
//     college:"MIET"
//   }

export default Student