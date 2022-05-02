import React from 'react'




const Middle = ({name,display}) => {

  return (
    <div className='w-full h-full'>
    <div className='w-full h-[10%] flex items-end justify-end '>
            <input type='text' className='w-3/6 h-3/6 bg-lblue rounded-md bg-no-repeat bg-left pl-12 mb-3 ' placeholder='Search' style={{backgroundImage:'url(/IMAGES/search.png)',backgroundPositionX:15}}/> 
    </div>
    <div className='h-[90%] w-full flex items-center '>
      <div className='h-[100%] w-full bg-lblue flex justify-center items-end'>
        <div className='w-[90%] h-[95%] flex items-end'>
        <div className='w-full h-[10%] fixed top-20 flex items-center '>
        <div className=' font-bold text-3xl'>{name}</div>
        </div>
      {display}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Middle