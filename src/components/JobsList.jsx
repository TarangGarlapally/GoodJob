import React, { useEffect, useState } from "react";
import JobTile from "./JobTile";
import Axios from "axios";
import { getElementError } from "@testing-library/dom";
import { withRouter } from "react-router";

export default function JobsList(props){
    const [jobs, setJobs] = useState([]);
    const [status,setStatus] = useState(0);
    const [page,setPage] = useState(1);
    const [pages,setPages] = useState(1);


    const getJobs = ()=>{
        console.log("getting");
        Axios.get(
            "https://royal-leaf-660f.taranggarlapally.workers.dev/?"+props.url
          ).then(res =>{
              console.log(res.data);
              if(res.data.length !== 0)
                {
                    setStatus(1);
                    setPages(res.data.length%20===0?parseInt(res.data.length/20):parseInt(res.data.length/20)+1)
                }
              else
                setStatus(2);
              setJobs(res.data);
              console.log("done");
          })
    }

    if(status === 0){
        getJobs();
    }

    const updatePage = (e)=>{
        document.getElementById(page).classList.remove("active");
        document.getElementById(e.target.id).classList.add("active");
        setPage(e.target.id);
    }

    const jobslist = jobs.slice((page-1)*20,page*20);
    return <div className="list-outer">
        <div className = "jobs-list">
            {jobslist.map((job)=> <JobTile job = {job} key={job.id}/>)}
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

        {status === 1?
            <div className="pagination">
                <p>
                {[...Array(pages)].map((n,id)=><span key={id+1}  className={id+1===page?"active pagin":"pagin"} onClick={updatePage} id={id+1} value={id+1}>{id+1}</span>)}
                
                </p>
            </div>
        :null}
    </div>
}