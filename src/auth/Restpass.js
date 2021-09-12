import React, { useRef } from 'react';
import * as FiIcon from 'react-icons/fi';

function Restpass({ IconButton, ResBtn }) {
    const emailRef = useRef()


    return (
        <form  className="sign-in-form">
            <h2 className="title">Find Your account</h2>

            {/* Email */}
            <div className="input-field">
                <IconButton color="primary"><FiIcon.FiKey /></IconButton>
                <input type="email" ref={emailRef} placeholder="Enter your e-mail" required />
            </div>
            {/* Reset */}
            <input type="submit" value="Reset" className="bttn" />
            <IconButton color="default" size="small" onClick={() => ResBtn()}>Remember Password?</IconButton>
        </form>
    )
}

export default Restpass
