import footerStyles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={footerStyles.wrapper}>
      <ul className={footerStyles.socials}>
        <li>fc</li>
        <li>sp</li>
        <li>in</li>
        <li>yu</li>
      </ul>
      <p>All material ©The Runaways 2023. All rights reserved </p>
    </footer>
  );
};
export default Footer;
