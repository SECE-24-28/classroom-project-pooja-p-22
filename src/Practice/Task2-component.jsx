import react from "react";
import { TaskStyle } from "./Task-style";
const Task2Component = () => {
    return(
        <TaskStyle>
           <h1>Table</h1> 
              <table>
                <thead>
                    <tr>
                    <th>fname</th>
                    <th>lname</th>
                    <th>email</th>
                    <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pooja</td>
                        <td>P</td>
                        <td>pooja@gmail.com</td>
                        <td>1234567891</td>
                    </tr>
                    <tr>
                        <td>Rithika</td>
                        <td>V.I</td>
                        <td>rithika@gmail.com</td>
                        <td>9876543210</td>
                    </tr>
                    <tr>
                        <td>Shree</td>
                        <td>S</td>
                        <td>shree@gmail.com</td>
                        <td>1122334455</td> 
                    </tr>
                </tbody>
              </table>

        </TaskStyle>
    );
}

export default Task2Component;