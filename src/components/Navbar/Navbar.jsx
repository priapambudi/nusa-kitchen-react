import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

const Navbar = (props) => {
  const { data } = props;
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 30 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav className={`container ${sticky ? "transparant-nav" : ""}`}>
      <Logo />
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
        <li>
          <button className="btn">Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
