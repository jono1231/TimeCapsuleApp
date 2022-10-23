import './SidebarModule.css';
import React, {useState} from 'react';

export default function SidebarModule(props) {
    return (
        <div className="sidebarmodule">
            <img className="sidebarmodule--img" src={props.img}></img>
            <text className="sidebarmodule--modulename">{props.moduleName}</text>
        </div>
    )
}
