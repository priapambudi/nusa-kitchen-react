import React from "react";
import "./Menu.css";

const Menu = (props) => {
  const { cardMenu } = props;
  return (
    <div>
      <div className="menus">
        {cardMenu.map((item, idx) => (
          <div className="menu" key={idx}>
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.ingredients}</p>
            <p className="price">{item.price}</p>
          </div>
        ))}

        <button className="view">View More...</button>
      </div>
    </div>
  );
};

export default Menu;
