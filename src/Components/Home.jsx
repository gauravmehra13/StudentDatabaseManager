
import React from 'react'
import './../App.css'
import Header from './Header'

function Home() {
  return (
    <div className='App'>
      <Header />
      <br />
      <h1 style={{ marginTop: "50px", fontSize: "30px" }}>Info about the project</h1>
      <hr />
      <p id='hometext'>This application will allow you to create an organised tabular data of students, where you can add as well as edit the data according to your preferance</p>
    </div>

  )
}


export default Home