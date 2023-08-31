import Banner from "./Banner";
import Tour from "./Tour";
import Video from "./Video";
import homepageStyles from "../styles/Homepage.module.css";
import { Parallax } from "react-parallax";

import Footer from "./Footer";
const Home = () => {
  return (
    <div className={homepageStyles.container}>
      <Banner />
      <section className={homepageStyles.wrapperAlbum}>
        <div className={homepageStyles.album}>
          <h2>NEW ALBUM IS OUT!!!</h2>
          <div className={homepageStyles.buttonAlbum}>Get it now</div>
        </div>
      </section>{" "}
      <Parallax
        className={homepageStyles.parallax}
        bgImage="/images/clouds2.jpg"
        strength={600}
      >
        <section className={homepageStyles.tour}>
          <h2>Tour dates</h2>
          <Tour />
        </section>
      </Parallax>
      <section className={homepageStyles.videoWrapper}>
        <Video />
        <h2>"I don't feel so alive"</h2>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
