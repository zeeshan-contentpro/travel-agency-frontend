import React from "react";
import styles from "./hotelInfo.module.css";

const HotelInfo = ({ hotel }) => {
  return (
    <div className={styles.packageContainer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{hotel.hotelName}</h2>
          <h4>{hotel.location}</h4>
        </div>

        <div className={styles.right}>
          <p>Total</p>
          <h2>৳{hotel.pricePackage.toFixed(2)}</h2>
        </div>
      </div>
      <hr />
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>{hotel.city}</h2>
          <h4>{hotel.country}</h4>
        </div>

        <div className={styles.right}>
          <p>Person</p>
          <h4>{hotel.person} Person</h4>
        </div>
      </div>
      <hr />
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Date</h2>
          <h4>From Feb 15 - Feb 19, 2024</h4>
        </div>

        <div className={styles.right}>
          <p>Duration</p>
          <h4>{hotel.duration}</h4>
        </div>
      </div>
    </div>
  );
};

export default HotelInfo;
