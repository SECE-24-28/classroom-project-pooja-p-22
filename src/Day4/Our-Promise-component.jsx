import React from "react";
import { Link } from "react-router-dom";
import { OurPromiseStyle } from "./Our-Promise-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OurpromiseData } from "./data";

const OurPromiseComponent = () => {
  return (
    <OurPromiseStyle gapLength="20px">
      <div className="paras">
        <h1>Our Promise</h1>
        <p>As part of our high quality service, we'd like to offer something extra too.</p>
      </div>
      <div className="parent">
        {OurpromiseData.map((item, index) => {
          return (
            <div
              className="child"
              key={index}
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <div className="title__parent">
                <FontAwesomeIcon
                  icon={item.icon}
                  color={item.color}
                  fontSize="30px"
                />
                <h1 className="title">{item.title}</h1>
              </div>
              <div>
                <p className="para">{item.content}</p>
              </div>
            </div>
          );
        })}
         
      </div>
       <Link to="/use-state">
             <button>Go to UseState</button>
       </Link>
    </OurPromiseStyle>
  );
};
export default OurPromiseComponent;



// import React from "react";
// import { OurPromiseStyle } from "./Our-Promise-style";
// const OurPromiseComponent = () => {
//     return(
//         <OurPromiseStyle>
//             <h2>Our Promise</h2>
//             <p className="intro">As part of our high quality service, 
//                 we'd like to offer something extra too.</p>

//             <div className="layout">
//                 <div className="c1">
//                     <div className="text">
//                         <h3>Top Code Quality</h3>
//                         <p>Our commitment goes beyond mere code - it encompasses providing solutions.
//                              You receive W3C fully compliant markup, without any compromise on quality.</p>
//                     </div>

//                 </div>

//                 <div className="c2">
//                     <div className="text">
//                         <h3>Responsive</h3>
//                         <p>We understand the value of a positive attitude, timely responsiveness, and adaptability. 
//                             We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.</p>
//                     </div>

//                 </div>

//                 <div className="c3">
//                     <div className="text">
//                         <h3>Rockstar Team</h3>
//                         <p>Our expertise is our unique selling proposition. 
//                             You'll have access to an all-star team of experienced professionals fully dedicated to serving you, 
//                             armed with coding skills that are truly exceptional.</p>
//                     </div>

//                 </div>

//                 <div className="c4">
//                     <div className="text">
//                         <h3>Fast Turn-arounds</h3>
//                         <p>The importance of speed is on par with quality for us. 
//                             We are swift, nimble, and capable of providing high-quality code within 
//                             a timeframe that suits your preferences.</p>
    
//                     </div>

//                 </div>

//                 <div className="c5">
//                     <div className="text">
//                         <h3>Life-time support</h3>
//                         <p>Our commitment to code quality is exemplified by our enduring support. 
//                             If any bugs happen to emerge in the future, 
//                             feel free to reach out to us for assistance.</p>
    
//                     </div>

//                 </div>

//                 <div className="c6">
//                     <div className="text">
//                         <h3>Secured Agreement</h3>
//                         <p>The creative work you receive is entirely your own, 
//                             and we unequivocally respect that. 
//                             We assure you of our commitment and 
//                             readiness to formalize this with a Non-Disclosure Agreement (NDA).</p>
    
//                     </div>

//                 </div>
//             </div>        
//         </OurPromiseStyle>
//     )
// };

// export default OurPromiseComponent;