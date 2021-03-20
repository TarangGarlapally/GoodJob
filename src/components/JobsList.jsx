import React, { useState } from "react";
import JobTile from "./JobTile";
import Axios from "axios";

export default function JobsList(props){
    const [jobs, setJobs] = useState([]);
    const [status,setStatus] = useState(0);

    const getJobs = ()=>{
        console.log("getting");
        Axios.get(
            "https://royal-leaf-660f.taranggarlapally.workers.dev/?"+props.url
          ).then(res =>{
              console.log(res.data);
              if(res.data.length !== 0)
                setStatus(1);
              else
                setStatus(2);
              setJobs(res.data);
              console.log("done");
          })
    }

    if(status === 0){
        getJobs();
    }




    return <div>
        <div className = "jobs-list">
            {jobs.map((job)=> <JobTile job = {job} key={job.id}/>)}
        </div>
        {status === 0?
        <div className='loader-out'>
            <div className="loading">
                <div className="loading-circle"></div>
            </div>
            <p>Getting available jobs...</p>
            </div>
        :null}
        {status === 2?<div className='loader-out'><p>No jobs available with given filters</p></div>:null}
    </div>
}