import React from 'react'
import MiddleActive from './MiddleActive'
import Latestbody from './Latestbody'
import data from './Data'

const Middle = () => {
  const Data=data.map((data)=>{
    return(
      <>
       <Latestbody Data={data} />
      </>
    )
  })
  return (
    <div className='w-full h-full'>
    <div className='w-full h-[10%] flex items-end justify-end '>
            <input type='text' className='w-3/6 h-3/6 bg-lgray rounded-md bg-no-repeat bg-left pl-12 mb-3 ' placeholder='Search' style={{backgroundImage:'url(/IMAGES/search.png)',backgroundPositionX:15}}/> 
    </div>
    <div className='h-[90%] w-full flex items-center '>
      <div className='h-[100%] w-full bg-lblue flex justify-center items-end'>
        <div className='w-[90%] h-[95%] flex items-end'>
        <div className='w-full h-[10%] fixed top-20 flex items-center '>
        <div className=' font-bold text-3xl'>Dashboard</div>
        </div>
        <div className='w-full h-[93%] overflow-y-scroll scrollbar-track-dgray  scrollbar-thin scrollbar-thumb-bluebutton '>
        <div className='w-full h-[20%] flex justify-between items-start'>
          <div className='w-[49%] h-5/6 bg-white rounded-md flex shadow-md'>
            <div className='w-[45%] h-full flex justify-center items-center'>
              <div className='w-20 h-20 bg-bluebutton rounded-full flex justify-center items-center'>
              <img src='/IMAGES/people.svg'/>
              </div>
            </div>
            <div className='w-full h-full flex flex-col justify-between'>
              <div className='h-[60%] flex flex-col justify-around border-b-[1px] border-dgray'>
                <div>Total Registered Students</div>
                <div>123,569</div>
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
              <div className='h-[60%] flex flex-col justify-around border-b-[1px] border-dgray'>
                <div>Total Courses Registered</div>
                <div>125</div>
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
        </div>
      </div>
    </div>
    </div>
  )
}

export default Middle