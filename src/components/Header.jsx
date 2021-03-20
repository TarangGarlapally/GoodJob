import React, { useContext } from "react";
import {styles} from "../styles.js";
import ToggleSwitch from "../components/ToggleSwitch";
import { useHistory } from "react-router";
import { ThemeContext } from "../App";

export default function Header(){

    const history = useHistory();
    const {theme,setTheme} = useContext(ThemeContext);
    const light = styles.lightTheme;
    
    const toggleSwitch = ()=>{
      setTheme(!theme);
    }
    document.body.style.backgroundColor = theme?"#18181A":"white";
    document.body.style.color = theme?"#D3D4CD":"black";

    return <div style={light.header}>
            <h1 className="nocopy" style={light.title} onClick={()=> history.push({
              pathname: "/"
            })}>GoodJob</h1>
            <ToggleSwitch toggleSwitch={toggleSwitch} dark_theme={theme}/>
        </div>
}