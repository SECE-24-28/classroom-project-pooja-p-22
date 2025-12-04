import React from "react";
import { ExcellenceStyle } from "./Excellence-style";
const ExcellenceComponent = () => {
    return(
        <ExcellenceStyle>
           <h1>Trusted By</h1>
      <div className="parent">
        <div className="child">
          <span className="numbers">100+</span>
          <br></br>
          <span className="details">Colleges</span>
        </div>
        <div className="child">
          <span className="numbers">150</span>
          <br></br>
          <span className="details">Professional Trainers</span>
        </div>
        <div className="child">
          <span className="numbers">1000+</span>
          <br></br>
          <span>Study Materials</span>
        </div>
        <div className="child">
          <span className="numbers"> 100000+</span>
          <br></br>
          <span className="details">Students</span>
        </div>
      </div>
        </ExcellenceStyle>
    )
}

export default ExcellenceComponent;