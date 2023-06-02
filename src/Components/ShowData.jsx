import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { studentUpdated } from '../features/StudentSlice';
import './../App.css'


function ShowData() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.student)
  // console.log(data);

  return (
    <>
      <br />
      <h1>Student Data Manager</h1>
      <hr />
      <div id='tablewrap'>
        <table id='tabledata' border="1" width="70%" cellPadding="2" cellSpacing="2">
          <thead>
            <tr>
              <td style={{ backgroundColor: "black", color: "white" }} className="t-head">Name</td>
              <td style={{ backgroundColor: "black", color: "white" }} className="t-head">Age</td>
              <td style={{ backgroundColor: "black", color: "white" }} className="t-head">Course</td>
              <td style={{ backgroundColor: "black", color: "white" }} className="t-head">Batch</td>
              <td style={{ backgroundColor: "black", color: "white" }} className="t-head">Change</td>
            </tr>
          </thead>

          {
            data.map((item, index) => {
              return (

                <tr key={index}>

                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>



                  <td style={{ textAlign: "center", paddingBottom: "5px" }}>
                    <button onClick={() => {
                      const id = item.id;
                      navigate('/editstudent', { state: id });
                      console.log(id);

                    }}>Edit</button>

                  </td>
                </tr>)

            })}

        </table>
      </div>
    </>

  )
}


export default ShowData