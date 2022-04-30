import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
        <div className=' fixed w-full h-full z-0'>
            <img src="/IMAGES/d2.png" className='w-6 fixed top-[28vh] left-[61vw] z-0'/>
            <img src="/IMAGES/d2.png" className='w-4  fixed top-[37vh] left-[68vw]'/>
            <img src="/IMAGES/d2.png" className='w-10  fixed bottom-20 left-[45vw]'/>
        </div>
        <div className='w-1/2 h-1/2 flex flex-col justify-around items-center z-10' >
            <div className='w-full text-center'><div className=' text-5xl '>Login to Admin Account</div></div>
            <div className='h-4/6 w-full flex justify-center'>
                <form className='w-1/2 h-full flex flex-col justify-around'>
                    <input type='email' placeholder='Email Address' className=' border-[2px] border-border w-full h-1/6 placeholder:text-dark placeholder:pl-3 rounded-md'/>
                    <input type='password' placeholder='Password' className=' border-[2px] border-border  w-full h-1/6 placeholder:text-dark placeholder:pl-3 rounded-md'/>
                   <Link to="/main"  className='  w-full h-1/6 bg-bluebutton text-white rounded-md cursor-pointer flex items-center justify-center '> <input type='submit' value='LOGIN'/></Link>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login