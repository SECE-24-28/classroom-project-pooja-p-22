import React from "react";
import { TaskStyle } from "./Task-style";
const Task1Component = () => {
  return (
    <TaskStyle>
      <h1 className="element">Sri Eshwar</h1>
      <div>
        <form>
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="ph">Phone No</label>
            <input type="tel" id="ph" />

            <button type="submit">Submit</button>
          
        </form>
      </div>
    </TaskStyle>
  );
};
export default Task1Component;
