import React from 'react'

const Latestbody = ({Data}) => {
  return (
    <div className='w-full flex justify-between text-center my-4'>
        <div className='w-full flex justify-start'>{Data.id}</div>
        <div className='w-full flex justify-start'><img src='/IMAGES/img1.png'/></div>
        <div className='w-full flex'>{Data.Name}</div>
        <div className='w-full flex justify-center'>{Data.Course}</div>
        <div className='w-full flex justify-end'>{Data.Score}</div>
    </div>
  )
}

export default Latestbody