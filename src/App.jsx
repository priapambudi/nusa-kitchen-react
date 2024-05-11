import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";
import Testimony from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";
import grade1 from "../src/assets/grade1.svg";
import grade2 from "../src/assets/grade2.svg";
import grade3 from "../src/assets/grade3.svg";
import Menu1 from "../src/assets/menu1.jpg";
import Menu2 from "../src/assets/menu2.jpg";
import Menu3 from "../src/assets/menu3.jpg";
import user1 from "../src/assets/testi1.jpg";
import user2 from "../src/assets/testi2.jpg";
import user3 from "../src/assets/testi3.jpg";
import user4 from "../src/assets/testi4.jpg";

const App = () => {
  const linkList = ["Home", "About", "Menu", "Testimony"];
  const gradeList = [
    { src: grade1, text: "Fresh Ingredients" },
    { src: grade2, text: "Certified Chef" },
    { src: grade3, text: "100% Halal" },
  ];
  const cardMenu = [
    {
      img: Menu1,
      title: "Fried Rice Special",
      ingredients: "Soy sauce, sesame oil, cooked rice, eggs, frozen peas",
      price: "$12",
    },
    {
      img: Menu2,
      title: "Chicken Soup",
      ingredients: "3 pound chicken, carrots, stalks celery, large onion",
      price: "$30",
    },
    {
      img: Menu3,
      title: "Satay",
      ingredients: "Chicken, tomatoes, peanuts, garlic, onion, cuke",
      price: "$35",
    },
  ];
  const cardTesti = [
    {
      img: user1,
      name: "Andrew K",
      location: "Jakarta, INA",
      text: "Exquisite flavors, impeccable service, and a cozy ambiance made our dining experience exceptional. We'll surely return for more delightful moments. Highly recommend this restaurant for a memorable meal!",
    },
    {
      img: user2,
      name: "Sicilia M",
      location: "Bandung, INA",
      text: "From the moment we stepped in, we were swept away by the delectable aromas and warm hospitality. Every dish surpassed expectations, leaving us craving for another visit soon!",
    },
    {
      img: user3,
      name: "Rudy S",
      location: "Depok, INA",
      text: "A culinary journey like no other! Each bite was a symphony of flavors, perfectly orchestrated by the talented chefs. This restaurant truly embodies the essence of gastronomic delight.",
    },
    {
      img: user4,
      name: "Jessica P",
      location: "Bogor, INA",
      text: "Our evening at this restaurant was nothing short of magical. Every dish was a masterpiece, crafted with passion and skill. A must-visit for anyone seeking an unforgettable dining experience.",
    },
  ];
  return (
    <div>
      <Navbar data={linkList} />
      <Hero />
      <div className="container">
        <Title title="About Us" />
        <About gradeList={gradeList} />
        <Title title="Our Menu" />
        <Menu cardMenu={cardMenu} />
        <Title title="Testimony" />
        <Testimony cardTesti={cardTesti} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
