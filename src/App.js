import "./styles.css";
import React, { useState } from "react";
import {styles} from "./styles.js";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import ToggleSwitch from "./components/ToggleSwitch.jsx";
import JobTile from "./components/JobTile";

function App(){
return <Router>
  <Switch>
      <Route exact path="/" component={Home}
      />
      <Route exact path="/jobpost" component={JobPost}
      />
  </Switch>
</Router>
}

function Home() {
  const [dark_theme,setDarkTheme] = useState(false);
  const light = styles.lightTheme;
  
  const toggleSwitch = ()=>{
    setDarkTheme(!dark_theme)
  }
  document.body.style.backgroundColor = dark_theme?"#18181A":"white";
  return (
    <div className="myscroller-notrack">
      <div style={light.header}>
        <h1 className="nocopy" style={light.title}>GoodJob</h1>
        <ToggleSwitch toggleSwitch={toggleSwitch} dark_theme={dark_theme}/>
      </div>
    
    <JobTile />
    <JobTile />
    <JobTile />
    <JobTile />
    <JobTile />
    <JobTile />
    <JobTile />
    <JobTile />
    </div>
  );
}

export default App;
