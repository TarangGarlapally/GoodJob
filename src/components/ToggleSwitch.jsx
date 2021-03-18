import React from "react";

export default function ToggleSwitch(props){
    
    return <div  style={{float:"right"}}>
    <label className="switch">
    
        <input type="checkbox" ></input>
        <span  onClick={()=>props.toggleSwitch()} className="slider"></span>
    </label>
    <p className="theme-emoji nocopy">{props.dark_theme ? <span>&#127774;</span>: <span>&#127772;</span>}</p>
    </div>;
} 