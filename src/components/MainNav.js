import navStyles from "../styles/Nav.module.css";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <ul className={navStyles.wrapper}>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/merch">
        <li>Merch </li>
      </Link>{" "}
      <Link to="/contact">
        <li>Contact</li>
      </Link>
    </ul>
  );
};
export default MainNav;
