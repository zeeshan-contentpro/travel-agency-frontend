"use client";
import React from "react";
import styles from "./bookedHotel.module.css";

export default function BookedHotel({ hotelData }) {
  const handleClick = () => {};

  function onCancelClick() {
    if (confirm("You are cancelling the booking")) {
      localStorage.clear();
    }
    window.location.reload(false);
  }

  return (
    <div>
      <div>
        <button></button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner1}>
          <h3>{hotelData?.hotelName}</h3>
          <h4>{hotelData?.location}</h4>
          <h4>{hotelData?.country}</h4>
        </div>
        <div className={styles.inner2}>
          <h4>Feb 15 - Feb 19, 2024</h4>
          <h4>{hotelData.duration}</h4>
          <h4>{hotelData.person} Person</h4>
        </div>
        <div className={styles.inner3}>
          <h3>৳{hotelData.pricePackage.toFixed(2)}</h3>
        </div>
        <div className={styles.inner4}>
          <div className={styles.btnContainer}>
            <button className={styles.detailsButton} onClick={handleClick}>
              View Details
            </button>
            <button className={styles.cancelButton} onClick={onCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
