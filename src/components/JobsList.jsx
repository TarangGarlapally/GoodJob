import React, { useState } from "react";
import JobTile from "./JobTile";
import Axios from "axios";

export default function JobsList(){
    const [jobs, setJobs] = useState([]);
    const [status,setStatus] = useState(0);

    const getJobs = ()=>{
        console.log("getting");
        Axios.get(
            "https://royal-leaf-660f.taranggarlapally.workers.dev/?https://jobs.github.com/positions.json?description=ruby&page=1"
          ).then(res =>{
              console.log(res.data);
              setStatus(1);
              setJobs(res.data);
              console.log("done");
          })
    }

    if(status === 0){
        getJobs();
    }




    return <div className = "jobs-list">
    {jobs.map((job)=> <JobTile job = {job} key={job.id}/>)}
    {jobs.length === 0?<p style={{align:"center",marginTop:"20%"}}>Getting Jobs...</p>:null}
  </div>
}