import React from 'react';
import './Sidebar.css';
import  ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add'
import SidebarChannelList from './SidebarChannelList';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/Info';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="seidebar_top"> 
                <h3>Welcome Ab</h3>
                <ExpandMoreIcon/>
            </div> 
            <div className="sidebar_channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>

                    </div>
                    <AddIcon className="sidebar_addChannel"></AddIcon>

                </div>
                <div className="sidebar_channelsList">
                    <SidebarChannelList/>
                    <SidebarChannelList/>
                    <SidebarChannelList/>
                    <SidebarChannelList/>
                </div>

            </div>
            <div className="sidebar_voice">
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
            </div>
            <div className="sidebar_profile">
                <Avatar/>
                <div className="sidebar_profileInfo">
                    <h3>Ab@gmail.com</h3>
                    <p>#this is myId</p>
                </div>
                <div className="sidebar_profileIcon">
                    <MicIcon/>
                    <HeadsetIcon/>
                    <SettingsIcon/>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
