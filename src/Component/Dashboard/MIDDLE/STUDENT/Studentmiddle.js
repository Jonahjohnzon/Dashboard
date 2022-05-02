import React from 'react'
import EachStudent from './EachStudent'
import data from '../../Data'
const Studentmiddle = () => {
    const Data=data.map((item)=>{
    return(
        <><EachStudent data={item}/></>
    )
    })
  return (
    <div className='w-full h-[93%] overflow-y-scroll scrollbar-hide '>
    <div className='flex flex-wrap justify-between '>{Data}</div>
    </div>
  )
}

export default Studentmiddle