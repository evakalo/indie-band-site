import Banner from "./Banner";
import Tour from "./Tour";
import homepageStyles from "../styles/Homepage.module.css";
const Home = () => {
  return (
    <div className={homepageStyles.container}>
      <Banner />
      <div className={homepageStyles.wrapperAlbum}>
        <div className={homepageStyles.album}>
          <h2>NEW ALBUM IS OUT!!!</h2>
          <button>Get it now</button>
        </div>
      </div>{" "}
      <div className={homepageStyles.tour}>
        <h2>Tour dates</h2>
        <Tour />
      </div>
    </div>
  );
};
export default Home;
