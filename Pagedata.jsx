import React from 'react'
import {FaPhoneAlt} from 'react-icons/fa'
export default function () {
  return (
    <div>
        <div>
            <h1 className='text-[50px] font-bold float-left ml-[5rem] mt-[2rem]'>CONTACT US</h1>
            <p className='text-[30px] float-left text-left ml-[5rem] font-[sans]' >Let's Connect:We're here to help you, and we'd love to hear from you!Whether you have any question,comment or just want to chat.</p>
        </div>
        <div className=' mt-[2rem] float-left ml-[5rem] w-[50%]'>
            <button className=' float-left bg-black text-center text-white w-[20%]'>VAI CHAT</button>
            <button className='ml-[-269px] bg-black text-center text-white w-[20%]'>VAI CALL</button>
            <button className='flex justify-center mt-[18px] bg-black text-white w-[50%] '>VAI EMAIL FORM</button>
        </div>
        <div className=' float-left  ml-[-45%] mt-[9rem]'>
            <input className='flex border-[2px]' type='text' placeholder='Enter your Name'/>
            <input className='border-[2px] mt-[15px]'type='email' placeholder='Enter your Email'/><br></br>
            <textarea className='flex border-[2px] w-[-20px] mt-[15px]' placeholder='Enter the Text'/>
        </div>
        <div className='mt-[3rem] float-left ml-[-30%]'>
            <button className='bg-black text-white mt-[17rem] w-[5rem]'> submit</button>
        </div>
     <div className='float-right'> 
        <img src="https://cccnevada.com/dashboard/wp-content/uploads/Contact-Us.jpg" className='h-[59vh] mt-[-5rem] ml-[-29%] ' alt="contact" />
     </div>
    </div>
  )
}

