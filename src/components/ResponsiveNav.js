// components/ResponsiveComponent.js
import { useState, useEffect } from "react";

import BurgerNav from "./BurgerNav";
//import Nav from "./Nav";
import MainNav from "./MainNav";

const ResponsiveNavigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025);
    };

    // Set initial viewport state
    handleResize();

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile ? <BurgerNav /> : <MainNav />;
};

export default ResponsiveNavigation;
