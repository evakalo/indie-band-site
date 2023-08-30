import Logo from "./Logo";
import layoutStyles from "../styles/Layout.module.css";
import ResponsiveNav from "./ResponsiveNav";
const Layout = () => {
  return (
    <div className={layoutStyles.wrapper}>
      <Logo />
      <ResponsiveNav />
    </div>
  );
};
export default Layout;
