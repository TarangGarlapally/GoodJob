import "./styles.css";
import React, {useState, createContext} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import JobPost from "./pages/JobPost";
import Header from "./components/Header";

export let ThemeContext = createContext();
function App(){
  const [theme,setTheme] = useState(false);
  return <ThemeContext.Provider value={{theme, setTheme}} >
        <div>
        <Router>
        <Header />
          <Switch>
              <Route exact path="/" component={Home}
              />
              <Route exact path="/jobpost" component={JobPost}
              />
          </Switch>
        </Router>
        </div>
        </ThemeContext.Provider>
}



export default App;
