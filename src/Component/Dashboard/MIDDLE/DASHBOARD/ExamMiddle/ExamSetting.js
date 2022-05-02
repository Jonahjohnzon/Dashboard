import React from 'react'

const ExamSetting = () => {
  return (
    <div className='my-10 w-full flex flex-col'>
        <div className='w-full flex mb-10 justify-between'>
    <div className='flex   items-center'>
        <div className=' font-bold mr-2 w-24'>
            Total Subject :
        </div>
        <div>
            <input type='number' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    <div className='flex  items-center '>
        <div className='font-bold mr-2 w-24'>
            Questions per Subject:
        </div>
        <div>
            <input type='number ' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    </div>
    <div className='w-full flex mb-10 justify-between'>
    <div className='flex   items-center'>
        <div className=' font-bold mr-2 w-24'>
            Exam Date :
        </div>
        <div>
            <input type='date' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    <div className='flex  items-center '>
        <div className='font-bold mr-2 w-24'>
            Exam Time:
        </div>
        <div>
            <input type='time' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    </div>
    <div className='w-full flex mb-10 justify-between'>
    <div className='flex   items-center'>
        <div className=' font-bold mr-2 w-24'>
            Exam Duration:
        </div>
        <div>
            <input type='time' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    <div className='flex  items-center '>
        <div className='font-bold mr-2 w-24'>
            Student Delay Time:
        </div>
        <div>
            <input type='time' className='w-60 h-14 rounded-md'/>
        </div>
    </div>
    </div>
    <div className='w-full flex  justify-between'>
    <div className='flex   items-center'>
        <div className=' font-bold mr-2 w-24'>
            Randomize Questions :
        </div>
        <div>
            <select className='w-60 h-14 rounded-md'>
                <option>Enabled</option>
                <option>Disabled</option>
            </select>
        </div>
    </div>
    <div className='flex  items-center '>
        <div className='font-bold mr-2 w-24'>
            Randomize Answers:
        </div>
        <div>
        <select className='w-60 h-14 rounded-md'>
                <option>Enabled</option>
                <option>Disabled</option>
            </select>
        </div>
    </div>
    </div>
<div></div></div>
  )
}

export default ExamSetting