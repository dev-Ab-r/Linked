import React from 'react';
import './Login.css';
import Logo from './images.png';
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase'


function Login() {
    const signIn = ()=>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src={Logo}  alt="login_img"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
