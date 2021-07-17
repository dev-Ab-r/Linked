import React, {useState,useEffect}from 'react';
import './Sidebar.css';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import SidebarChannelList from './SidebarChannelList';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {selectUser } from '../../features/userSlice';
import {useSelector,useDispatch} from 'react-redux';
import db, { auth } from '../user/firebase';

function Sidebar() {
    const user = useSelector(selectUser)
    const [channels,setChannels] = useState([]);

    useEffect(()=>{
        db.collection("channels").
        onSnapshot(snapshot  =>
        setChannels(snapshot.docs.map((doc)=>({
                id:doc.id,
                channel:doc.data(),
            }))));
    },[])
    console.log(channels);
    const handleAddChannel =()=>{
        const channelName= prompt("Enter a new Channel Name");
        if(channelName){
            db.collection('channels').add({
                channelName:channelName,
            })
        }
    }
    //console.log(user);
    return (
        <div className="sidebar">
            <div className="seidebar_top"> 
                <h3>Welcome {user.displayName.split(' ').slice(0,1).join(' ')}</h3>
                <ExpandMoreIcon/>
            </div> 
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>

                    </div>
                    <AddIcon onClick={handleAddChannel} className="sidebar_addChannel"></AddIcon>

                </div>
                <div className="sidebar_channelsList">
                    { 
                    channels.map(({id,channel})=>(
                       
                         <SidebarChannelList key={id} id={id} channelName={channel.channelName}/>
                    ))}  
                   
                    
                </div>

            </div>
            {/* <div className="sidebar_voice">
                <SignalCellularAltIcon
                className="sidebar_voiceIcon"
                fontSize="large"/>
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3> 
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div> */}
            <div className="sidebar_profile">
                <Avatar src ={user.photo}/>
                <div className="sidebar_profileInfo">
                    <h3>{user.displayName}</h3>
                </div>
                <div className="sidebar_profileIcon">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <ExitToAppIcon onClick={()=>auth.signOut()}/>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
