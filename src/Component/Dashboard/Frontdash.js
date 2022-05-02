import React from 'react'
import Leftbody from './Leftbody'
import Middle from './MIDDLE/DASHBOARD/Dashmidde/Middle'
import Rightbody from './RIGHT/DASH/Rightbody'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainDash from './MIDDLE/DASHBOARD/Dashmidde/MainDash'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ExamRight from './RIGHT/EXAM/ExamRight'
import ExamDash from './MIDDLE/DASHBOARD/ExamMiddle/ExamDash'
import Student from './RIGHT/STUDENTS/Student'
import Studentmiddle from './MIDDLE/STUDENT/Studentmiddle'
import Dashright from './RIGHT/DASH/DASHBOARD/Dashright'
const Frontdash = () => {
  const [set,setSet]=useState('')
   const {path} = useSelector(state=>state.Location)

  return (
    <div className='w-full h-[100vh] flex justify-center'>
        <Leftbody/>
        <Routes>
        <Route exact path='' element={<><div className='w-[55vw] flex'><Middle name='Dashboard' display={<MainDash/>}/></div> <Rightbody rightinfo={<Dashright/>}/></>}/>
        <Route exact path='exams' element={<><div className='w-[55vw] flex'><Middle name='Exam Setting ' display={<ExamDash/>} /></div><Rightbody rightinfo={ <ExamRight/>}/></>}/>
        <Route exact path='students' element={<><div className='w-[55vw] flex'><Middle name='Student ' display={<Studentmiddle/>} /></div><Rightbody rightinfo={ <Student/>}/></>}/>
        </Routes>
    </div>
  )
}

export default Frontdash 