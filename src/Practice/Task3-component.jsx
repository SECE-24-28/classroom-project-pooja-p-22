import React from "react";
import { TaskStyle } from "./Task-style";
const Task3Component = () => {
    return(
        <TaskStyle>
           <div className="parent">
             <div className="square__child"></div>
             <div className="square__child"></div>
             <div className="square__child"></div>
             <div className="square__child"></div>
           </div>
        </TaskStyle>
    );
};

export default Task3Component;