import React, { useRef, useState } from 'react'
import * as FiIcon from 'react-icons/fi'

function SignIn({ IconButton, ResBtn }) {
    const [loading, setLoading] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()


    console.log(emailRef);

    return (
        <form className="sign-in-form">
            <h2 className="title">Log in</h2>
            {/* Email */}
            <div className="input-field">
                <IconButton className="startIcon">
                    <FiIcon.FiAtSign />
                </IconButton>
                <input type="email" placeholder="Email" ref={emailRef} required />
            </div>
            {/* Password */}
            <div className="input-field">
                <IconButton className="startIcon">
                    <FiIcon.FiLock />
                </IconButton>
                <input type="password" placeholder="Password" ref={passwordRef} required />
            </div>
            {/* Log in Button */}
            <input disabled={loading} type="submit" value="Login" className="bttn" />

            <IconButton color="default" size="small" onClick={() => ResBtn()}>Forgot Password?</IconButton>
        </form>
    )
}

export default SignIn;
