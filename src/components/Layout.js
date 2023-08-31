import Logo from "./Logo";
import layoutStyles from "../styles/Layout.module.css";
import ResponsiveNav from "./ResponsiveNav";
const Layout = () => {
  return (
    <header className={layoutStyles.wrapper}>
      <Logo />
      <ResponsiveNav />
    </header>
  );
};
export default Layout;
