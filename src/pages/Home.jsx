import React, { useState } from "react";
import {styles} from "../styles.js";
import ToggleSwitch from "../components/ToggleSwitch";
import JobsList from "../components/JobsList.jsx";
import Header from "../components/Header.jsx";

export default function Home() {
    
    return (
      <div>
        <Header />
        <JobsList />
      </div>
    );
  }