import React from 'react'

function Student() {
  return (
    <div className='w-5/6 flex flex-col justify-center'>
    <div>
      <form className='mb-5'>
          <div className=' font-bold'>Take Action</div>
        <div className='relative w-full h-10 my-2'>
          <div className=' absolute w-full h-full top-0  z-0 text-dgray'>Import  +</div>
        <input type='file' placeholder='import Exam Instruction' className='h-10  w-full opacity-0 absolute top-0 z-10 cursor-pointer'/>
        </div>
        <input type='submit' value='Submit' className=' bg-bluebutton px-7 py-1 text-white rounded-md shadow-md hover:shadow-sm cursor-pointer '/>
      </form>
      <div >
        <div className=' font-bold mb-2 text-bluebutton'>Export</div>
        <div className=' '>
            <div className=' flex justify-between'>
                <div>
                    <select className=' text-dgray border-b-2'>
                        <option>Suffix</option>
                        <option>Prefix</option>
                    </select>
                </div>
                <div>
                    <select className=' text-black'>
                        <option>PDF</option>
                        <option>DOCX</option>
                        <option>CDF</option>
                        <option>XPS</option>
                    </select>
                </div>
                <div>
                    <select className=' text-black '>
                        <option>Pages</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='mt-4'>
            <div className='  border-black border-[1px] text-center py-1 rounded-md cursor-pointer '>
                Export Page 1 - 15
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Student