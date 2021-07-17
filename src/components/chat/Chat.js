import React,{useState,useEffect} from 'react';
import './Chat.css'
import ChatHeader from './ChatHeader';
import  AddCircleIcon  from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message.js';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { selectChannelId, selectChanneName } from '../../features/appSlice';
import db from '../user/firebase';
import firebase from 'firebase';


function Chat() {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChanneName)
    const [input,setInput] =useState('')
    const [messages,setMessages]= useState([]);
    console.log(messages)
    useEffect(() => {
        if(channelId){
            db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot)=>
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            );
        }
       
    }, [channelId])

    const sendMessage =(e)=>{
        e.preventDefault();
        
        db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            user:user
        });
        setInput('');
    }
    return (
        <div className="chat"> 
            <ChatHeader channelName ={channelName}/>
            <div className="chat_mssg">
                {messages.map((message)=>(
                     <Message
                     timestamp={message.timestamp}
                     message={message.message}
                     user= {message.user}
                     />
                ))}
               
            </div>
            <div  className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input 
                        value ={input} 
                        disabled={!channelId}
                        onChange={(e)=>setInput(e.target.value)}
                        placeholder={`Write Message`}/>
                    <button type = "submit" onClick={sendMessage}
                    disabled={!channelId}  className="chat_inputButton">Send Message</button>
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
