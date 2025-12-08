// import React from "react";
// import { ExcellenceStyle } from "./Excellence-style";
// import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// const ExcellenceComponent = () => {
//     return(
//         <ExcellenceStyle>
//            <h1>Trusted By</h1>
//       <div className="box">

//         <div className="box__color1">
//         <div className="box__content1">
//         <FontAwesomeIcon icon={faBuildingColumns} />
//           <span className="numbers">100+</span>
//           <br></br>
//           <span className="details">Colleges</span>
//         </div>
//         </div>


//         <div className="box__color2">
//         <div className="box__content2">
//           <FontAwesomeIcon icon={faBuildingColumns} />
//           <span className="numbers">150</span>
//           <br></br>
//           <span className="details">Professional Trainers</span>
//         </div>
//         </div>

//         <div className="box__color3">
//         <div className="box__content3">
//           <FontAwesomeIcon icon={faBuildingColumns} />
//           <span className="numbers">1000+</span>
//           <br></br>
//           <span>Study Materials</span>
//         </div>
//         </div>
        
//         <div className="box__color4">
//         <div className="box__content4">
//           <FontAwesomeIcon icon={faBuildingColumns} />
//           <span className="numbers"> 100000+</span>
//           <br></br>
//           <span className="details">Students</span>
//         </div>
//         </div>

//       </div>
//         </ExcellenceStyle>
//     )
// }

// export default ExcellenceComponent;

import React from "react";
import { ExcellenceStyle } from "./Excellence-style";
import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ExcellenceComponent = () => {
  return (
    <ExcellenceStyle>
      <h1>Trusted By</h1>

      <div className="cards">
        <div className="card card--green">
          <div className="card__content">
            <FontAwesomeIcon className="card__icon" icon={faBuildingColumns} />
            <span className="card__number">100+</span>
            <span className="card__text">COLLEGES</span>
          </div>
          <div className="card__bottom" />
        </div>

        <div className="card card--blue">
          <div className="card__content">
            <FontAwesomeIcon className="card__icon" icon={faBuildingColumns} />
            <span className="card__number">150</span>
            <span className="card__text">PROFESSIONAL TRAINERS</span>
          </div>
          <div className="card__bottom" />
        </div>

        <div className="card card--yellow">
          <div className="card__content">
            <FontAwesomeIcon className="card__icon" icon={faBuildingColumns} />
            <span className="card__number">1000+</span>
            <span className="card__text">STUDY MATERIALS</span>
          </div>
          <div className="card__bottom" />
        </div>

        <div className="card card--red">
          <div className="card__content">
            <FontAwesomeIcon className="card__icon" icon={faBuildingColumns} />
            <span className="card__number">1,00,000</span>
            <span className="card__text">STUDENTS</span>
          </div>
          <div className="card__bottom" />
        </div>
      </div>
    </ExcellenceStyle>
  );
};

export default ExcellenceComponent;
