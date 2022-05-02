import React from 'react'
import Regist from './Regist'
const Rightbody = ({rightinfo}) => {
  return (
    <div className=' h-full w-[22vw] fixed right-0 top-0'>
      <div className='w-full h-16 flex items-end'>
    <div className='flex w-2/6 justify-around'>
                <div className='px-4 py-3 bg-lblue rounded-md shadow-md hover:shadow-sm cursor-pointer'>
                <img src='/IMAGES/alarm.svg' />
                </div >
                <div className=' px-4  py-3  bg-lblue rounded-md shadow-md hover:shadow-sm cursor-pointer'>
                <img src='/IMAGES/setting.svg'/>
                </div>
             </div>
             </div>
             <div className='h-[100vh] w-full flex justify-end'>
               <div className='w-[95%] h-full'>
             <div className='flex my-10'>
               <img src='/IMAGES/Admin.png' className='mr-4'/>
               <div className='flex flex-col justify-center'>
               <div className=' font-bold text-sm'>Akinjobi Sodiq</div>
                 <div className='text-dgray  text-xs'>Admin</div>
               </div>
             </div>
              {rightinfo}
             </div>
             </div>
        
    </div>
  )
}

export default Rightbody