import React from 'react'
import MiddleActive from './MiddleActive'
import Latestbody from '../../../Latestbody'
import data from '../../../Data'
import { useState } from 'react'
import { useEffect } from 'react'

const MainDash = () => {
    const Data=data.map((data)=>{
        return(
          <>
           <Latestbody Data={data} />
          </>
        )
      })
      const [totalstudent,settotalstudent]=useState(0)
      const [totalcourse,settotalcourse]=useState(0)
      useEffect(()=>{
        if(totalstudent<=123569){
          settotalstudent(totalstudent+200)
      }
  },[totalstudent])
  useEffect(()=>{
    if(totalcourse<=124){
      settotalcourse(totalcourse+1)
    }
  },[totalcourse])
  return (
    <div className='w-full h-[93%] overflow-y-scroll scrollbar-hide '>
        <div className='w-full h-[20%] flex justify-between items-start'>
          <div className='w-[49%] h-5/6 bg-white rounded-md flex shadow-md'>
            <div className='w-[45%] h-full flex justify-center items-center'>
              <div className='w-20 h-20 bg-bluebutton rounded-full flex justify-center items-center'>
              <img src='/IMAGES/people.svg'/>
              </div>
            </div>
            <div className='w-full h-full flex flex-col justify-between'>
              <div className='h-[60%] flex flex-col justify-around border-b-[1px] border-lblue'>
                <div>Total Registered Students</div>
                <div>{totalstudent}</div>
              </div>
              <div className=' font-medium text-xs h-[30%]'>1526 registered in the last 7 days</div>
            </div>
          </div>
          <div className='w-[49%] h-5/6 bg-white rounded-md flex shadow-md'>
            <div className='w-[45%] h-full flex justify-center items-center'>
              <div className='w-20 h-20 bg-bluebutton rounded-full flex justify-center items-center'>
              <img src='/IMAGES/sch.svg'/>
              </div>
            </div>
            <div className='w-full h-full flex flex-col justify-between'>
              <div className='h-[60%] flex flex-col justify-around border-b-[1px] border-lblue'>
                <div>Total Courses Registered</div>
                <div>{totalcourse}</div>
              </div>
              <div className=' font-medium text-xs h-[30%]'>15 registered in the last 7 days</div>
            </div>
          </div>
        </div>
        <div className='w-full h-[80%] flex items-center ' >
          <div className='w-full h-[95%] bg-white shadow-md'>
            <div className='w-full h-[20%] flex items-center justify-between border-b-lblue border-b-[2px]'>
              <div className='ml-3 text-bluebutton text-lg font-bold'>Activity Feed</div>
              <div className='mr-3 cursor-pointer'><img src='/IMAGES/icondot/Group.svg'/></div>
            </div>
            <div className='h-[80%] flex flex-col justify-around w-full overflow-hidden'>
              <MiddleActive/>
              <MiddleActive/>
            </div>
          </div>
        </div>
        <div  className='w-full h-fit  mt-10'>
        <div className='w-full h-fit bg-white shadow-md '>
        <div className='w-full h-[15%] flex items-center justify-between border-b-lblue border-b-[2px]'>
              <div className='ml-3 text-bluebutton text-lg font-bold'>Latest Results</div>
            </div>
            <div className='w-full  flex flex-col items-center '>
              <div className='flex w-[95%] justify-between text-bluebutton border-y-2 border-dark mt-5 font-bold'>
                <div className='w-full flex justify-start'>S/N</div>
                <div className='w-full flex justify-start'>Photo</div>
                <div className='w-full flex justify-start'>Name</div>
                <div className='w-full flex justify-end'>Course Applied for</div>
                <div className='w-full flex justify-end'>Score</div>
              </div>
              <div className='flex flex-col w-[95%] justify-between'>
                {Data}
              </div>
            </div>
        </div>
        </div>
        </div>
  )
}

export default MainDash