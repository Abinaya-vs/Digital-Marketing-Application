import React from 'react'
import './SigninForm.css'
import { FaUser } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const SigninForm = () => {
  return (
    <div className='wrapper'>
    <form action="">
    <h1>Sign in</h1>

    <div className="input-box">
    <input type="email" placeholder='   Email' required />
    <MdEmail className="icon" />
    </div>

    <div className="input-box">
    <input type="text" placeholder='   UserName' required />
    <FaUser className='icon' />
    </div>

    <div className="input-box">
    <input type="password" placeholder='   Password' required />
    <HiLockClosed  className='icon'/>
    </div>

    <div className="input-box">
    <input type="password" placeholder='  Confirm Password' required />
    <HiLockClosed  className='icon'/>
    </div>

    <div className="input-box">
    <input type="number" placeholder='   Phone Number' required />
    <FaPhone className='icon'/>
    </div>
    <br></br>
    
    <button type ="submit">Sign in</button>

    <div className="register-link">
    <p>Already have an account?<Link to ="/">Log in</Link></p>
    </div>

    </form>
    </div>
  )
}
export default SigninForm
