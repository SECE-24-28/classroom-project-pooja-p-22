import React from "react";
import { Link } from "react-router-dom";
import { TrustedByStyle } from "./TrustedBy-style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChalkboardTeacher,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const TrustedByComponent = () => {

  const cards = [
    {
      value: "100+",
      label: "COLLEGES",
      icon: faBuildingColumns,
      color: "#01c8c8",
    },
    {
      value: "150",
      label: "PROFESSIONAL TRAINERS",
      icon: faChalkboardTeacher,
      color: "#00b7ff",
    },
    {
      value: "1000+",
      label: "STUDY MATERIALS",
      icon: faBook,
      color: "#f5b041",
    },
    {
      value: "1,00,000",
      label: "STUDENTS",
      icon: faUserGraduate,
      color: "#ff4d4d",
    },
  ];

  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="cards">
        {cards.map((item, index) => (
          <div className="card" key={index}>
            
            <div
              className="separator"
              style={{ backgroundColor: item.color }}
            ></div>

            <div className="content">
              <div className="info">
                <div className="value">{item.value}</div>
                <div className="label">{item.label}</div>
              </div>
            </div>

            <div
              className="icon-wrapper"
              style={{ backgroundColor: item.color }}
            >
              <div className="icon" style={{ color: item.color }}>
                <FontAwesomeIcon icon={item.icon} />
              </div>
            </div>

          </div>
        ))}
        
      </div>

      <Link to="/slide2">
            <button>Go to Our Promise</button>
      </Link>
    </TrustedByStyle>
  );
};

export default TrustedByComponent;
