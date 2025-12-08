import React from "react";
import { PlacementStyle} from "./Placement-style";

const PlacementComponent = () => {
    return(
        <PlacementStyle>
            <div className="slide">
                <h2 className="heading">A Symbol of Excellence in Placement Training</h2>
                <p className="text">Aptitude Guru Hem was born from the aspiration to
                     create a learning environment that inspires greatness. 
                     Our founder, driven by personal experiences and a desire to make a difference, 
                     established the company with a mission to empower students with the 
                     right skills and mindset for success.</p>
            </div>

            <div className="content__row">
                <div className="sub__slide1">
                    <h3 className="sub__heading1">Our Vision</h3>
                     <p className="context1">
                        Our vision is to empower individuals from diverse backgrounds to become
                        accomplished professionals. At Aptitude Guru Hem, we believe that knowledge 
                        has the power to transcend boundaries.
                     </p>
            </div>

            <div className="divider"></div>

            <div className="sub__slide2">
                 <h3 className="sub__heading2">Our Mission</h3>
                 <p className="context2">
                    Our mission is to revolutionize education by providing comprehensive 
                    training in aptitude, coding, and web/mobile development. We foster a 
                    culture of inclusivity and personal growth.
                 </p>
            </div>
        </div>

        
        <div className="capsule">
            <h2 className="title">Learners Today, Leaders Tomorrow</h2>
            <p className="text1">With our continuous research and development, we provide you with an excellent Aptitude training.</p>
        </div>
        

            
        </PlacementStyle>
    );
};

export default PlacementComponent;