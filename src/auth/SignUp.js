import React, { useState, useEffect, useRef } from 'react'
import * as FiIcon from 'react-icons/fi';
import { validation } from './helpers'
const passvalidationstext = [
    'at least 8 character',
    'at leat one numver',
    'at least special character',
    'at least one capital character',
    'at least one lower character'

];

function SignUp({ IconButton }) {

    const [data, setData] = useState('')
    const [passvalidations, setpassvalidations] = useState([null, null, null, null])
    const [showValidationBox, setShowValidationBox] = useState('hidden')
    const nameRef = useRef()
    const rollRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmRef = useRef()


    const handlechange = (e) => {
        let { name, value } = e.target;
        console.log(name, value);
        setData(value)

    }

    const validationBoxToggle = () =>{
        setShowValidationBox('show')
    }

    useEffect(() => {

        let newvalidationstate = validation(data, passvalidations);
        setpassvalidations(newvalidationstate);

    }, [data])



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
            <div onFocus={ () => {validationBoxToggle()} } className="input-field">

                <IconButton className="startIcon"><FiIcon.FiUnlock /></IconButton>
                <input type="password" placeholder="Password" name="password" autoComplete="off" onChange={handlechange} ref={passwordRef} required />
            </div>
            {/* Confirm Password */}
            <div className="input-field">
                <IconButton className="startIcon"><FiIcon.FiLock /></IconButton>
                <input type="password" placeholder="Confirm password" ref={confirmRef} required />
            </div>

            {/* passvalidations */}

            {
                showValidationBox === 'hidden'

                    ? null
                    :
                    (
                        <div className="output">

                            <h3 style={{
                                color: 'green',
                                fontSize: '1rem',
                                padding: '8px',
                                fontWeight: '700'
                            }}>

                                {
                                    passvalidations.every((elm) => {
                                        return elm === true
                                    })
                                        ?
                                        "Great! Looks like a strong password."
                                        :
                                        null

                                }

                            </h3>
                            {
                                passvalidationstext.map((text, idx) => {
                                    const color = passvalidations[idx] === null ? 'red' : (passvalidations[idx] === true ? 'green' : 'red')
                                    return (
                                        <ul>
                                            <li style={{ color }}>{text}</li>
                                        </ul>
                                    )
                                })

                            }
                        </div>

                    )



            }




            {/* Submit Button */}
            <input type="submit" className="bttn" value="Sign up" />
        </form >
    )
}

export default SignUp
