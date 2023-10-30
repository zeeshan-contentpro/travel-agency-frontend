import React from "react";
import styles from "./page.module.css";

const Flight = () => {
  return (
    <>
      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>Where to Fly?</h1>
          <h3 className={styles.subtitle}>
            Find Cheap Flights, Airline Tickets in Bangladesh
          </h3>
        </header>
        <div className={styles.searchFlight}>
          <div>
            <div>
              <input type="radio" id="oneway" name="oneway" value="One Way" />
              <input
                type="radio"
                id="roundtrip"
                name="roundtrip"
                value="Round Trip"
              />
              <input
                type="radio"
                id="multicity"
                name="multicity"
                value="Multi City"
              />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
