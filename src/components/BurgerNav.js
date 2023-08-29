// import { SlArrowRight } from "react-icons/sl"; dodaj ako ces stavljati kategorije u burger bar
import burgerStyles from "../styles/Burger.module.css";
import { LuAlignRight, LuArrowLeftCircle } from "react-icons/lu";
import { useState } from "react";
import { Link } from "react-router-dom";
const BurgerNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`burgerStyles.wrapper open_sans.className`}
      onClick={toggleMenu}
    >
      {!isMenuOpen && <LuAlignRight className={burgerStyles.burger} />}

      {isMenuOpen && (
        <div className={burgerStyles.nav}>
          <ul>
            <LuArrowLeftCircle className={burgerStyles.arrow} />
            <Link to="/">
              <li className={burgerStyles.underline}>Home</li>
            </Link>

            <Link to="/merch">
              <li>Merch </li>
            </Link>

            <Link to="/about">
              <li className={burgerStyles.underline}>About</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default BurgerNav;
