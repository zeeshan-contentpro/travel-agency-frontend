"use client";
import React from "react";
import styles from "./page.module.css";
import DestinationCard from "./destinationCard";

export default function HolidayCardItem({ params }) {
  return (
    <>
      <div className={styles.main}>
        <h1>HolidayCardItem</h1>
      </div>
      <div className={styles.container}>
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
        <DestinationCard />
      </div>
    </>
  );
}
