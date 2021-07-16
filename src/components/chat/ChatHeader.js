//import { HelpRounded, SearchRounded, SendRounded } from '@material-ui/icons';
import  EditLocationRoundedIcon from '@material-ui/icons/EditLocation';
import NotifiactionsIcon from '@material-ui/icons/Notifications';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import React from 'react';
import './ChatHeader.css'

function ChatHeader() {
    return (
        <div className="chatHeader"> 
            <div className="chatHeader_left">
                <h3>
                    <span className="chatHeader_hash">#</span> Test Channel Name
                </h3>
            </div>
            <div className="chatHeader_right">
                <NotifiactionsIcon/>
                <EditLocationRoundedIcon/>
                <PeopleAltOutlinedIcon/>
                <div className="chatHeader_search"> 
                    <input placeholder="Search"/>
                    <SearchRoundedIcon/>
                </div>
                <SendRoundedIcon/>
                <HelpRoundedIcon/>
            </div>
        </div>
    )
}
export default ChatHeader
