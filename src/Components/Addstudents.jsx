import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { AddStudent } from '../features/StudentSlice';
import Header from './Header'; import { useNavigate } from 'react-router-dom';
import Student from '../Data';

function Addstudents() {

    const UserList = useSelector((state) => state.student)
    console.log(UserList);

    // const navigate=useNavigation();
    const navigate = useNavigate(); const dispatch = useDispatch();
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')



    const formHandler = (e) => {
        e.preventDefault();
        if (Name && Age && Course && Batch) {
            dispatch(AddStudent({
                id: UserList[UserList.length - 1].id + 1,
                Name,
                Age,
                Course,
                Batch,
            }
            ))
            setName('');
            setAge('');
            setCourse('');
            setBatch('');
            navigate('/')
        }
    }

    return (
        <>
            {/* <Header /> */}
            <form id='formadd' onSubmit={formHandler}>
                <label htmlFor='Name'>Name:  </label>
                <input className='inpgrp' type='text' value={Name} onChange={(e) => setName(e.target.value)} /> &nbsp;&nbsp;

                <label htmlFor='Age'>Age:  </label>
                <input className='inpgrp' type='text' value={Age} onChange={(e) => setAge(e.target.value)} />&nbsp;&nbsp;

                <label htmlFor='Course'>Course:  </label>
                <input className='inpgrp' type='text' value={Course} onChange={(e) => setCourse(e.target.value)} />&nbsp;&nbsp;

                <label htmlFor='Batch'>Batch:  </label>
                <input className='inpgrp' type='text' value={Batch} onChange={(e) => setBatch(e.target.value)} />

                <br />
                <br />
                
                <input className='inpgrpdone' type='submit' value='submit' />

            </form>
        </>
    )
}



export default Addstudents