import React from 'react';
import './Chat.css'
import ChatHeader from './ChatHeader';
import  AddCircleIcon  from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message.js';


function Chat() {
    return (
        <div className="chat"> 
            <ChatHeader/>
            <div className="chat_mssg">
                <Message/>
            </div>
            <div  className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={`Test Message`}/>
                    <button type = "submit" className="chat_inputButton">Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>

                </div>
            </div>
            
        </div>
    )
}

export default Chat
