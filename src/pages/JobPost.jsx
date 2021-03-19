import React, { useState } from "react";

import Header from "../components/Header.jsx";

export default function  JobPost(props){
    console.log(props.location.state.job);
    return <div>
        <Header />
        <p>hey</p>
    </div>
}