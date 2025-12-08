import "./App.css";
import { Routes, Route } from "react-router-dom";

import ExcellenceComponent from "./Day2/Excellence-component";
import TrustedByComponent from "./Day5/TrustedBy-component";
import OurPromiseComponent from "./Day4/Our-Promise-component";
import FourOFourComponent from "./Day6/404-component";
import UseStateComponent from "./Use-State/Use-state-component";
import UsestateformComponent from "./Use-State_Form/Form-component";
import AdditionComponent from "./Use-State_Form/Addition-component";

// import GetInTouchComponent from "./Day3/get-in-touch-component";
// import PlacementComponent from "./Day3/Placement-component";
// import BoxComponent from "./Day4/Box-component";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ExcellenceComponent />} />
        <Route path="/slide1" element={<TrustedByComponent />} />
        <Route path="/slide2" element={<OurPromiseComponent />} />
        <Route path="*" element={<FourOFourComponent />} />
        <Route path="/use-state" element={<UseStateComponent />} />
        <Route path="/form" element={<UsestateformComponent />} />
        <Route path="/add" element={<AdditionComponent />} />
        
      </Routes>
    </div>
  );
}

export default App;

