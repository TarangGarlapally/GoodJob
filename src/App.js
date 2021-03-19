import "./styles.css";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import JobPost from "./pages/JobPost";

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



export default App;
