import React from 'react'
import Leftbody from './Leftbody'
import Middle from './MIDDLE/DASHBOARD/Dashmidde/Middle'
import Rightbody from './RIGHT/DASH/Rightbody'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import MainDash from './MIDDLE/DASHBOARD/Dashmidde/MainDash'
import { useState } from 'react'
import Regist from './RIGHT/DASH/Regist'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ExamRight from './RIGHT/DASH/ExamRight'
import ExamDash from './MIDDLE/DASHBOARD/ExamMiddle/ExamDash'
const Frontdash = () => {
  const [set,setSet]=useState('')
   const {path} = useSelector(state=>state.Location)
 useEffect(()=>{
if(path==''){
setSet(
  <div className='w-5/6 flex flex-col justify-center'>
  <div className=' font-bold'>Registration Summary</div>
  <div className='h-[70vh] overflow-y-scroll overflow-x-hidden w-full scrollbar-thin scrollbar-thumb-bluebutton scrollbar-track-lblue'>
    <Regist/>
  </div>
</div>

)
}
if(path=='exams'){
  setSet(
  <>
  <ExamRight/>
  </>
  )
  }
 },[path])
  return (
    <div className='w-full h-[100vh] flex justify-center'>
        <Leftbody/>
        <Routes>
        <Route exact path='' element={<><div className='w-[55vw] flex'><Middle name='Dashboard' display={<MainDash/>}/></div> <Rightbody rightinfo={set}/></>}/>
        <Route exact path={path} element={<><div className='w-[55vw] flex'><Middle name='Exam Setting ' display={<ExamDash/>} /></div><Rightbody rightinfo={set}/></>}/>
        </Routes>
    </div>
  )
}

export default Frontdash 