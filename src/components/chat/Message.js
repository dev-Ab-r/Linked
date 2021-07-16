import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div>
            <div className="message">
            <Avatar/>
            <div className="message_info">
                <h4>Abhishek<span className ="message_timestamp"> Time Stamp</span></h4>
                <p>Hello Baby</p>
            </div>
           
        </div>
        <div className="message">
            <Avatar/>
            <div className="message_info">
                <h4>Rahul<span className ="message_timestamp"> Time Stamp</span></h4>
                <p>Hello Ab</p>
            </div>
           
        </div>
        </div>
        
    )
}

export default Message
