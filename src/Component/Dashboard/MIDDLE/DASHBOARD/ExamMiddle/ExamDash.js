import React from 'react'
import ExamSetting from './ExamSetting'
const ExamDash = () => {
  return (
    <div className='w-full h-[93%] overflow-y-scroll scrollbar-hide '>
        <form className='w-ful h-full flex flex-col'>
            <div className='flex mt-5'>
                <div className=' whitespace-nowrap mr-5 font-bold'>Exam Instrution:</div>
                <textarea className='w-full h-40 rounded-md'/>
            </div>
            <div className='h-full'>
             <ExamSetting/>
            </div>
            <div className='flex items-center '>
                <div className=' whitespace-nowrap mr-5 font-bold'>Exam Instrution:</div>
                <textarea className='w-full h-16 rounded-md'/>
            </div>
            <div className='flex items-center justify-end w-full mt-7 '>
                <div className='flex items-center w-1/2 justify-around '>
                    <div className=' font-bold text-bluebutton cursor-pointer'>Reset</div>
                    <input type='submit' value='Save and Process' className=' bg-bluebutton px-5 py-2 rounded-md text-white font-bold cursor-pointer'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ExamDash