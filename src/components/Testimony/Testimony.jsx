import React from "react";
import "./Testimony.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user1 from "../../assets/testi1.jpg";
import user2 from "../../assets/testi2.jpg";
import user3 from "../../assets/testi3.jpg";
import user4 from "../../assets/testi4.jpg";

const Testimony = ({ cardTesti }) => {
  return (
    <div className="testimony">
      <img src={next_icon} className="next-btn" />
      <img src={back_icon} className="back-btn" />
      <div className="slider">
        <ul>
          {cardTesti.map((item, idx) => (
            <li key={idx}>
              <div className="slide">
                <div className="user-info">
                  <img src={item.img} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.location}</span>
                  </div>
                </div>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
          {/* <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Andrew K</h3>
                  <span>Jakarta, INA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo impedit quos iure illum quisquam veritatis eius
                veniam neque fugiat?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non, iure!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>Sicilia</h3>
                  <span>Bandung, INA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo impedit quos iure illum quisquam veritatis eius
                veniam neque fugiat?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non, iure!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Andrew K</h3>
                  <span>Jakarta, INA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo impedit quos iure illum quisquam veritatis eius
                veniam neque fugiat?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non, iure!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>Andrew K</h3>
                  <span>Jakarta, INA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi illo impedit quos iure illum quisquam veritatis eius
                veniam neque fugiat?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Non, iure!
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Testimony;
