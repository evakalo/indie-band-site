import Logo from "./Logo";
import ResponsiveNav from "./ResponsiveNav";
const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        margin: "0px",
      }}
    >
      <Logo />
      <ResponsiveNav />
    </div>
  );
};
export default Layout;
