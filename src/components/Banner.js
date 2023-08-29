import homepageStyles from "../styles/Homepage.module.css";
import Layout from "./Layout";
const MainPage = () => {
  return (
    <div className={homepageStyles.bannerWrapper}>
      <Layout />
    </div>
  );
};
export default MainPage;
