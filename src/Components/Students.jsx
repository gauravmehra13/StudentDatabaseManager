import React from 'react'
import './../App.css'
import { Link } from 'react-router-dom'
import Addstudents from './Addstudents'
import Header from './Header'
import ShowData from './ShowData'

function Students() {
    return (<div className='App'>
        {/* <Header /> */}
        <div>
        <Link to="/Addstudent" className='linktoadd'>Add Student</Link>
        </div>
        <ShowData />
    </div>)
}


export default Students