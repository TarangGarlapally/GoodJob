import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Header from "../components/Header.jsx";

export default function  JobPost(props){
    const job = props.location.state.job;
    const history = useHistory();

    useEffect(()=>{
        document.getElementById("arrow-back").style.color = "black";
    });
    return <div>
        <div id = "arrow-back" className="arrow-back" onClick={()=>history.goBack()}>
            <i className='fas fa-arrow-left'></i>
        </div>
        <div className="container-outer">
            <div className="container-header">
                <div className="logo-div">
                    <img alt = "company-logo" src={job.company_logo}/>
                </div>
                <div className="title-div">
                    <h1>{job.title}</h1><br />
                    <h2>{job.company}</h2>
                    <a href={job.company_url} rel="noreferrer" target="_blank"><p><b>Visit company website</b> <i className="fa fa-link"  aria-hidden="true"></i></p></a><br />
                    <p className = "location"><i className="fa fa-map-marker"></i> {job.location}</p>
                    <p className = "timestamp">Job posted on <b>{job.created_at}</b></p>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="container-desc">
                <div className ="container-desc-left">
                    <h4>Job Location</h4>
                    <p>{job.location}</p> 
                </div>
                <div className ="container-desc-right">
                    <h4>Job Type</h4>
                    <p>{job.type}</p>  
                </div>
                
                <div className="description">
                    <div dangerouslySetInnerHTML={{__html: job.description}} />
                </div>

                <div className="apply">
                    <h2>Ready to apply?</h2><br />
                    <div dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
                </div>
            </div>

        </div>

    </div>
}