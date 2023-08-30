import Layout from "./Layout";
import merchStyles from "../styles/Merch.module.css";
const Merch = () => {
  // const merch = [
  //   {
  //     name: "Tote bag",
  //     photo: "/images/tote2.jpg",
  //     price: "10",
  //   },
  //   {
  //     name: "T-shirt",
  //     photo: "/images/shirt4.jpg",
  //     price: "20",
  //   },
  //   { name: "Vinyl", photo: "/images/vinly.jpg", price: "10" },
  //   {
  //     name: "Pins",
  //     photo: "/images/pins.jpg",
  //     price: "20",
  //   },
  // ];

  return (
    <div className={merchStyles.container}>
      <Layout />
      <div className={merchStyles.wrapperMerch}>
        <div className={merchStyles.box}>
          <img
            className={merchStyles.photo}
            src="/images/tote2.jpg"
            alt="merch"
          />
          <div className={merchStyles.text}>
            <h4>vinyl</h4>
            <p>Price:20€ </p>
          </div>
        </div>
        <div className={merchStyles.box}>
          <img
            className={merchStyles.photo}
            src="/images/shirt4.jpg"
            alt="merch"
          />
          <div className={merchStyles.text}>
            <h4>vinyl</h4>
            <p>Price:20€ </p>
          </div>
        </div>
        <div className={merchStyles.box}>
          <img
            className={merchStyles.photo}
            src="/images/vinly.jpg"
            alt="merch"
          />
          <div className={merchStyles.text}>
            <h4>vinyl</h4>
            <p>Price:20€ </p>
          </div>
        </div>
        <div className={merchStyles.box}>
          <img
            className={merchStyles.photo}
            src="/images/pins.jpg"
            alt="merch"
          />
          <div className={merchStyles.text}>
            <h4>vinyl</h4>
            <p>Price:20€ </p>
          </div>
        </div>
        {/* {merch.map((item, index) => {
          return (
            <div key={index} className={merchStyles.box}>
              <img className={merchStyles.photo} src={item.photo} alt="merch" />
              <div className={merchStyles.text}>
                <h4>{item.name}</h4>
                <p>Price: {item.price}€ </p>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default Merch;
