import React, { useRef } from 'react';
import * as FiIcon from 'react-icons/fi';


function SignUp({ IconButton }) {
    const nameRef = useRef()
    const rollRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()

    return (
        <form className="sign-up-form">
            <h2 className="title">Sign up</h2>
            {/* FUll Name */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiSmile /></IconButton>
                <input type="text" placeholder="Full Name" ref={nameRef} required />
            </div>

            {/* Roll No */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiAward /></IconButton>
                <input type="number" placeholder="University Roll No" ref={rollRef} required />
            </div>

            {/* Email Adress */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiAtSign /></IconButton>
                <input type="email" placeholder="Email" ref={emailRef} required />
            </div>

            {/* Password */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiUnlock /></IconButton>
                <input type="password" placeholder="Password" ref={passwordRef} required />
            </div>
            {/* Confirm Password */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiLock /></IconButton>
                <input type="password" placeholder="Confirm password" ref={confirmRef} required />
            </div>
            {/* Submit Button */}
            <input type="submit" className="bttn" value="Sign up" />
        </form>
    )
}

export default SignUp
