import React from 'react'

const MiddleActive = () => {
  return (
    <div className='w-full  mt-5 ml-5 flex justify-between '>
           <div className='w-10 mr-2'>
               <img src='/IMAGES/img1.png'/>
           </div>
            <div className='w-full '>
                <div className='w-4/6'>
                <div className=' font-bold'>Lagbaja Chinedu</div>
                <div className=' text-sm text-dgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisl turpis luctus mi, tortor.</div>
                <div className='ml-5 flex my-2'><img src='/IMAGES/msg.svg' className='w-4 h-4'/><input type='text' placeholder='Add comment' className='w-full border-[1px] h-5 text-xs border-dgray rounded-md placeholder:pl-3'/></div>
                <div className='ml-5 flex'><img src='/IMAGES/img2.png' className='w-4 h-4'/><div><div className='text-xs font-bold'>Lagbaja Chinedu</div><div> <div className=' text-xs text-dgray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales nisl turpis luctus mi, tortor.</div></div></div></div>
                </div>
            </div>

     
    </div>
  )
}

export default MiddleActive