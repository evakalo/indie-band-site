import footerStyles from "../styles/Footer.module.css";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoSpotify,
  BiLogoSoundcloud,
} from "react-icons/bi";
const Footer = () => {
  return (
    <footer className={footerStyles.wrapper}>
      <ul className={footerStyles.socials}>
        <li>
          <BiLogoFacebookCircle />
        </li>
        <li>
          <BiLogoInstagram />
        </li>{" "}
        <li>
          <BiLogoSpotify />
        </li>{" "}
        <li>
          <BiLogoSoundcloud />
        </li>
      </ul>
      <p>All material ©The Runaways 2023. All rights reserved. </p>
    </footer>
  );
};
export default Footer;
