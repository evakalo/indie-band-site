import footerStyles from "../styles/Footer.module.css";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoSpotify,
  BiLogoYoutube,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className={footerStyles.wrapper}>
      <ul className={footerStyles.socials}>
        <li>
          <BiLogoFacebookCircle className={footerStyles.icon} />
        </li>
        <li>
          <BiLogoInstagram className={footerStyles.icon2} />
        </li>{" "}
        <li>
          <BiLogoSpotify className={footerStyles.icon3} />
        </li>{" "}
        <li>
          <BiLogoYoutube className={footerStyles.icon4} />
        </li>
      </ul>
      <p>All material ©The Runaways 2023. All rights reserved. </p>
    </footer>
  );
};
export default Footer;
