"use client";
import React from "react";
import styles from "./page.module.css";
import DestinationCard from "./destinationCard";

export default function HolidayCardItem({ params }) {
  return (
    <>
      <div className={styles.main}>
        <h1>Holiday</h1>
      </div>
      <div className={styles.container}>
        <div>
          <h1>Explore Maldives</h1>
          <p className={styles.headerPara}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
            ipsam nobis distinctio ad nisi, totam itaque suscipit rem, neque
            veritatis quas qui officia numquam ex enim est? Officia,
            accusantium. Doloribus!
          </p>
        </div>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </>
  );
}
