import Layout from "./Layout";
import merchStyles from "../styles/Merch.module.css";
import { Parallax } from "react-parallax";
import Footer from "./Footer";

const Merch = () => {
  return (
    <>
      <Parallax
        className={merchStyles.parallax}
        bgImage="/images/neon.jpg"
        strength={600}
      >
        <div className={merchStyles.container}>
          <Layout />
          <section className={merchStyles.wrapperMerch}>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/tote2.jpg"
                alt="tote bag"
              />
              <div className={merchStyles.text}>
                <h4>Tote</h4>
                <p>Price: 20€ </p>
              </div>
            </div>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/shirt4.jpg"
                alt="t shirt"
              />
              <div className={merchStyles.text}>
                <h4>T shirt</h4>
                <p>Price: 20€ </p>
              </div>
            </div>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/vinly.jpg"
                alt="vinyl"
              />
              <div className={merchStyles.text}>
                <h4>EP</h4>
                <p>Price: 30€ </p>
              </div>
            </div>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/pins.jpg"
                alt="pins"
              />
              <div className={merchStyles.text}>
                <h4>Pins</h4>
                <p>Price: 30€ </p>
              </div>
            </div>
          </section>
        </div>
      </Parallax>
      <Footer />
    </>
  );
};
export default Merch;
