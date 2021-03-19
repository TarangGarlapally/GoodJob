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




    return <div>
        <div className = "jobs-list">
            {jobs.map((job)=> <JobTile job = {job} key={job.id}/>)}
        </div>
        {jobs.length === 0?
        <div className='loader-out'>
            <div className="loading">
                <div class="loading-circle"></div>
            </div>
            <p>Getting available jobs...</p>
            </div>
        :null}
    </div>
}