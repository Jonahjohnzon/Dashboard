import React from 'react'
import Regist from '../Regist'
const Dashright = () => {
  return (
    <div className='w-5/6 flex flex-col justify-center'>
    <div className=' font-bold'>Registration Summary</div>
    <div className='h-[70vh] overflow-y-scroll overflow-x-hidden w-full scrollbar-thin scrollbar-thumb-bluebutton scrollbar-track-lblue'>
      <Regist/>
    </div>
  </div>
  )
}

export default Dashright