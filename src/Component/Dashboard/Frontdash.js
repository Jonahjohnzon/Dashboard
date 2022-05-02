import React from 'react'
import Leftbody from './Leftbody'
import Middle from './Middle'
import Rightbody from './Rightbody'
const Frontdash = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center'>
            <Leftbody/>
        <div className='w-[55vw] flex'>
         <Middle/>
        </div>
        <Rightbody/>
    </div>
  )
}

export default Frontdash