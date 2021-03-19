import React, { useState } from "react";
import {styles} from "../styles.js";
import ToggleSwitch from "../components/ToggleSwitch";
import { useHistory } from "react-router";

export default function Header(){

    const [dark_theme,setDarkTheme] = useState(false);
    const history = useHistory();
    const light = styles.lightTheme;
    
    const toggleSwitch = ()=>{
      setDarkTheme(!dark_theme);
    }
    document.body.style.backgroundColor = dark_theme?"#18181A":"white";
    document.body.style.color = dark_theme?"#D3D4CD":"black";

    return <div style={light.header}>
            <h1 className="nocopy" style={light.title} onClick={()=> history.push({
              pathname: "/"
            })}>GoodJob</h1>
            <ToggleSwitch toggleSwitch={toggleSwitch} dark_theme={dark_theme}/>
        </div>
}