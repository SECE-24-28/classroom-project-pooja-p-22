import React from "react";
import { TrustedByStyle } from "./TrustedBy-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChalkboardTeacher,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

const TrustedByComponent = () => {
  return (
    <TrustedByStyle>
      <h1>Trusted By</h1>

      <div className="cards">

        {/* CARD 1 */}
        <div className="card">
          <div className="content">
            <div className="info">
              <div className="value">100+</div>
              <div className="label">COLLEGES</div>
            </div>
          </div>

          <div className="separator"></div>

          <div className="icon-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card highlight">
          <div className="separator"></div>

          <div className="content">
            <div className="info">
              <div className="value">150</div>
              <div className="label">PROFESSIONAL TRAINERS</div>
            </div>
          </div>

          <div className="icon-wrapper bottom">
            <div className="icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <div className="content">
            <div className="info">
              <div className="value">1000+</div>
              <div className="label">STUDY MATERIALS</div>
            </div>
          </div>

          <div className="separator"></div>

          <div className="icon-wrapper">
            <div className="icon">
              <FontAwesomeIcon icon={faBook} />
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="card highlight">
          <div className="separator"></div>

          <div className="content">
            <div className="info">
              <div className="value">1,00,000</div>
              <div className="label">STUDENTS</div>
            </div>
          </div>

          <div className="icon-wrapper bottom">
            <div className="icon">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
          </div>
        </div>

      </div>
    </TrustedByStyle>
  );
};

export default TrustedByComponent;
