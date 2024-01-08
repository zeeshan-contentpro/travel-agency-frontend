"use client";
import React from "react";
import Image from "next/image";
import { IoArrowForwardSharp } from "react-icons/io5";
import { airlinesImagesLinks } from "@/data/flight";
import styles from "./bookedFlight.module.css";

export default function BookedFlight({ flight }) {
  const handleClick = () => {};

  function onCancelClick() {
    if (confirm("You are cancelling the booking")) {
      localStorage.removeItem("flightBookingStatus");
    }
    window.location.reload(false);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner1}>
        <Image
          src={airlinesImagesLinks[flight.airlinesIndex]}
          alt="destination"
          width={150}
          height={150}
          className={styles.logo}
        />
      </div>
      <div className={styles.inner2}>
        <div className={styles.toFrom}>
          <h4>{flight.from}</h4> <IoArrowForwardSharp /> <h4>{flight.to}</h4>
        </div>
        <h4>{flight.departing}</h4>
        <div className={styles.toFrom}>
          <h4>{flight.to}</h4> <IoArrowForwardSharp /> <h4>{flight.from}</h4>
        </div>
        <h4>{flight.returning}</h4>
        <h4>{flight.passenger} Person</h4>
      </div>
      <div className={styles.inner3}>
        <small>Total</small>
        <h3>${(flight.flightPrice * flight.passenger).toFixed(2)}</h3>
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
  );
}
