import React from 'react'

const ExamRight = () => {
  return (
    <div className='w-5/6 flex flex-col justify-center'>
     <div>
       <div>
         <div className='relative w-full h-10 my-10'>
           <div className=' absolute w-full h-full top-0  z-0 text-dgray'>Import Exam Instruction  +</div>
         <input type='file' placeholder='import Exam Instruction' className='h-10  w-full opacity-0 absolute top-0 z-10 cursor-pointer'/>
         </div>
       </div>
       <div >
         <div className=' font-bold mb-2'>Help and Hints</div>
         <div className=' text-xs text-dgray'>Hover over any item to display hint</div>
       </div>
     </div>
     </div>
  )
}

export default ExamRight