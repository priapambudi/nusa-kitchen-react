import React from "react";
import "./About.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const About = (props) => {
  const { gradeList } = props;
  return (
    <>
      <div className="abouts">
        <div className="about">
          <img src={about1} alt="" />
        </div>
        <div className="about">
          <p>
            Indulge in timeless flavors at our traditional resto. From savory
            stews to delectable pastries, each dish tells a story of heritage
            and craftsmanship. Join us for an unforgettable culinary journey.
          </p>
        </div>
        <div className="about">
          <img src={about2} alt="" />
        </div>
      </div>
      <div className="grades">
        {gradeList.map((item, idx) => (
          <div className="grade" key={idx}>
            <img src={item.src} alt="" />
            <h4>{item.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
