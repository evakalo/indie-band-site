import Layout from "./Layout";
import merchStyles from "../styles/Merch.module.css";
import { Parallax } from "react-parallax";
import Footer from "./Footer";
const Merch = () => {
  return (
    <>
      <Parallax
        className={merchStyles.parallax}
        bgImage="/images/neon.webp"
        strength={600}
        fetchpriority="high"
      >
        <div className={merchStyles.container}>
          <Layout />
          <section className={merchStyles.wrapperMerch}>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/casette.jpg"
                alt="casette"
              />
              <div className={merchStyles.text}>
                <h4>Tape</h4>
                <p>Price: 30€ </p>
              </div>
            </div>{" "}
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/vinly.webp"
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
                src="/images/sticker-guitar.jpg"
                alt="stickers"
              />

              <div className={merchStyles.text}>
                <h4>Stickers</h4>
                <p>Price: 20€ </p>
              </div>
            </div>
            <div className={merchStyles.box}>
              <img
                className={merchStyles.photo}
                src="/images/shirt-girl.jpg"
                alt="t shirt"
              />
              <div className={merchStyles.text}>
                <h4>T shirt</h4>
                <p>Price: 20€ </p>
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
