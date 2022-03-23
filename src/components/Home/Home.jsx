import React, { useState } from "react";
import Exclusive from "../Exclusive/Exclusive";
import Hero from "../Hero/Hero";

const Home = () => {
  const [fixed, setFixed] = useState(false);
  window.addEventListener("scroll", (e) => {
    const scrollAmount = e.path[1].scrollY;
    if (scrollAmount > 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  });
  return (
    <>
      <Hero fixed={fixed} />
      <Exclusive />
    </>
  );
};

export default Home;
