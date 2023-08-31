import tourStyles from "../styles/Tour.module.css";

const Tour = () => {
  return (
    <>
      <div className={tourStyles.wrapper}>
        <h3>Oct 2</h3>
        <p>Sala Barts, Barcelona</p>
        <button>Tickets</button>
      </div>
      <div className={tourStyles.wrapper}>
        <h3>Oct 5</h3>
        <p>Bataclan, Paris</p>
        <button>Tickets</button>
      </div>
      <div className={tourStyles.wrapper}>
        <h3>Oct 8</h3>
        <p>Gasometer, Wienna</p>
        <button>Tickets</button>
      </div>
    </>
  );
};
export default Tour;
