import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App.js";
import JobsList from "../components/JobsList.jsx";



function InputField(props){
  const [filter,setFilter] = useState({term:"",location:""});
  const {theme} = useContext(ThemeContext);

  const handleChange = (e)=>{
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
    })
  }
  
  const handleSubmit = ()=>{
    props.createString(filter)
    
  }
  const handleClear = ()=>{
    setFilter({...filter,term: "" , location: ""});
    props.createString({term:"",location:""});
  }


  useEffect(()=>{
    if(theme){
      document.getElementById("filter-term").style.backgroundColor = "rgb(224, 224, 224)";
      document.getElementById("filter-location").style.backgroundColor = "rgb(224, 224, 224)";
      document.getElementById("clr").style.backgroundColor = "rgb(224, 224, 224)";
    }else{
      document.getElementById("filter-term").style.backgroundColor = "white";
      document.getElementById("filter-location").style.backgroundColor = "white";
      document.getElementById("clr").style.backgroundColor = "white";
    }
  })
  

  return <div className="filter-bar">
          <input className="filter-term" id="filter-term" type="text" name="term" placeholder = "Search Term" onChange={handleChange} value={filter.term}/>
          <input className="filter-location" id="filter-location" name="location" type="text" placeholder = "Location" onChange={handleChange} value={filter.location}/>
          <button className="button" type="submit" onClick={handleSubmit}><b>Search</b></button>
          <button className="clr button" id="clr" onClick={handleClear}><b>Clear</b></button>
        </div>
}

export default function Home() {

  const [url,setUrl] = useState("https://jobs.github.com/positions.json?");
  const createString = (filter)=>{
    setUrl(url + "description=" + filter.term + "&location=" + filter.location);
  }
    
    return (
      <div>
        <InputField createString = {createString}/>
        <JobsList url = {url} key={url}/>
      </div>
    );
  }