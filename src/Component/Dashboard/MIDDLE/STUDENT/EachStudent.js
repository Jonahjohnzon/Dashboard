import { data } from 'autoprefixer'
import React from 'react'

const EachStudent = ({data}) => {
  return (
    <div className='w-56 h-44 bg-white mb-10 rounded-md flex justify-center shadow-md'>
        <div className='w-[95%]'>
            <div className='mt-3'><img src='/IMAGES/icondot/Active.png'/></div>
            <div >
                <div className=' font-bold my-2'>{data.Name}</div>
                <div className='flex justify-between'>
                    <div >{data.Pass}</div>
                    <div className=' text-bluebutton font-bold'>{data.Course}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EachStudent