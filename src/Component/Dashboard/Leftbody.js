import React from 'react'
import Admin from './Icon/Admin'
import Dash from './Icon/Dash'
import Exams from './Icon/Exams'
import Student from './Icon/Student'
import Web from './Icon/Web'
import News from './Icon/News'
import Result from './Icon/Result'
import Course from './Icon/Course'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setpath} from '../../Store/CreateSlice'

const Leftbody = () => { 
  const dispatch=useDispatch();
  return (
    <div className='h-full flex flex-col  justify-between  fixed left-0 top-0 w-[22vw] '>
            <div className='w-full h-1/6 mt-3 ml-10'>
            <img src="/IMAGES/icon.svg" />
            </div>
            <div className='h-full ml-10'>
                <div className='h-4/6'>
                <div className='mb-3'>Main Menu</div>
                <div className=' h-full flex flex-col justify-around'>
                    <Link to='/main' onClick={()=>dispatch(setpath(''))}><Dash/></Link>
                    <Link  to='/main/exams'><Exams/></Link>
                    <Link to='/main/students' ><Student/></Link>
                    <div ><Course/></div>
                    <div ><Admin/></div>
                    <div ><Web/></div>
                    <div ><News/></div>
                    <div ><Result/></div>
                  
                </div>
                </div>
            </div>
            <div className='mb-3 ml-10'><img src="/IMAGES/illu.svg"/></div>
           
        </div>
  )
}

export default Leftbody