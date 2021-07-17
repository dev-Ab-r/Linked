import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message({timestamp,user,message}) {
    return (
        <div>
            <div className="message">
                <Avatar src={user.photo}/>
                <div className="message_info">
                    <h4>{user.displayName.split(' ').slice(0,1).join(' ')}<span className ="message_timestamp"> {new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                    <h5>{message}</h5>
                </div>
           
            </div>
        </div>
        
    )
}

export default Message
