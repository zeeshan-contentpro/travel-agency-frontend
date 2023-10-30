import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Holiday Places",
  description: "Escape to your dream destination",
};

const Holiday = () => {
  return (
    <>
      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>Explore Your Destinations</h1>
        </header>
      </div>

      <h1>Holiday</h1>
    </>
  );
};

export default Holiday;
