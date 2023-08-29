import Layout from "./Layout";
import merchStyles from "../styles/Merch.module.css";
const Merch = () => {
  const merch = [
    {
      name: "Tote bag",
      photo: "/images/tote.jpg",
      price: "10",
    },
    {
      name: "T-shirt",
      photo: "/images/shirt4.jpg",
      price: "20",
    },
    { name: "Vinyl", photo: "/images/vinly.jpg", price: "10" },
    {
      name: "Pins",
      photo: "/images/pins.jpg",
      price: "20",
    },
  ];

  return (
    <div>
      <div className={merchStyles.container}>
        <Layout />
        {/* <h1 style={{ color: "white", textAlign: "center" }}>MERCH</h1> */}
        <div className={merchStyles.wrapperMerch}>
          {merch.map((item, index) => {
            return (
              <div key={index} className={merchStyles.box}>
                <div>
                  <div
                    className={merchStyles.photo}
                    style={{
                      background: `url(${item.photo}) center center/cover`,
                    }}
                  />
                  <h4>{item.name}</h4>
                  <p>Price: {item.price}€ </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Merch;
