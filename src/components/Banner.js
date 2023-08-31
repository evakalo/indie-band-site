import homepageStyles from "../styles/Homepage.module.css";
import Layout from "./Layout";
import { Parallax } from "react-parallax";
const MainPage = () => {
  return (
    <Parallax
      strength={600}
      bgImage="/images/singer.jpg"
      className={homepageStyles.bannerWrapper}
    >
      <Layout />
    </Parallax>
  );
};
export default MainPage;
