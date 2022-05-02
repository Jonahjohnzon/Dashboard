import React from 'react'
import { Reg } from './Reg'
const Regist = () => {
 const Data = Reg.map((item)=>{
     return(
         <div className='flex my-10 w-[100%] justify-between items-center'>
         <div className='bg-lblue h-10 flex items-center rounded-md px-3 text-bluebutton font-bold'>{item.score}</div>
         <div className='w-24 mr-5'>{item.course}</div>
         </div>
     )
 })
  return (
    <div >
       {Data} 
    </div>
  )
}

export default Regist