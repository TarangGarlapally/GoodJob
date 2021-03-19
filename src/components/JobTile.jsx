import React from "react";
import { useHistory } from "react-router";

export default function JobTile(props){
    const history = useHistory();
    const job  = props.job;
    
    return <div className="job-tile" onClick = {()=>history.push({
        pathname: '/jobpost',
        search: '?id=' + job.id,
        state: { job: job },
    })}>

        <div className="job-tile-left nocopy">
            <div className="company-logo">
                <img alt="Company logo"  src={job.company_logo}/>
            </div>
            <div className="job-title-text">
                <h2>{job.title}</h2>

                <p>{job.location}</p>
                <div className="job-tile-type">
                    <p className="">{job.type}</p>
                </div>
            </div>
            
        </div>
        
    </div>;
}