import React from 'react'
import { useDispatch } from 'react-redux';
import './SidebarChannelList.css'
import {setChannelInfo} from '../../features/appSlice'

function SidebarChannelList({id,channelName}) {
    const dispatch = useDispatch()
    return (
        <div className="sidebar_channel" onClick={()=>
            dispatch(setChannelInfo({
                channelId:id,
                channelName:channelName
            }))}>
            <h4 className="channel">
                <span className="sidebar_channelHash">#</span>{channelName}
            </h4>
        </div>
    )
}

export default SidebarChannelList
