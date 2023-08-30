// import { SlArrowRight } from "react-icons/sl"; dodaj ako ces stavljati kategorije u burger bar
import burgerStyles from "../styles/Burger.module.css";
import { LuAlignRight, LuArrowLeftCircle } from "react-icons/lu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const BurgerNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // const [changeStyle, setChangeStyle] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // let location = useLocation();
  // useEffect(() => {
  //   if (location.pathname === "/merch") {
  //     setChangeStyle(true);
  //   } else {
  //     setChangeStyle(false);
  //   }
  // }, [location]);
  return (
    <nav
      className={`burgerStyles.wrapper open_sans.className`}
      onClick={toggleMenu}
    >
      {!isMenuOpen && <LuAlignRight className={burgerStyles.burger} />}

      {isMenuOpen && (
        <div className={burgerStyles.nav}>
          {/* <ul className={changeStyle ? burgerStyles.backgroundChange : ""}> */}
          <ul>
            <LuArrowLeftCircle className={burgerStyles.arrow} />
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/merch">
              <li>Merch </li>
            </Link>

            <Link to="/about">
              <li>About</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default BurgerNav;
