import homepageStyles from "../styles/Homepage.module.css";
import Layout from "./Layout";
import { Parallax } from "react-parallax";
const MainPage = () => {
  return (
    <Parallax
      strength={600}
      bgImage="/images/singer.webp"
      className={homepageStyles.bannerWrapper}
      fetchpriority="high"
    >
      <Layout />
    </Parallax>
  );
};
export default MainPage;
