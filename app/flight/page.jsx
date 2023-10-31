import React from "react";
import { BiSearch } from "react-icons/bi";
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
            <div className={styles.btnradio}>
              <div className={styles.btnradio1}>
                <input type="radio" id="oneway" name="oneway" value="One Way" />
                <label htmlFor="">One Way</label>
              </div>
              <div className={styles.btnradio1}>
                <input
                  type="radio"
                  id="roundtrip"
                  name="roundtrip"
                  value="Round Trip"
                />
                <label htmlFor="">Round Trip</label>
              </div>
              <div className={styles.btnradio1}>
                <input
                  type="radio"
                  id="multicity"
                  name="multicity"
                  value="Multi City"
                />
                <label htmlFor="">Multi City</label>
              </div>
            </div>
            <div className={styles.btndropdown}></div>
          </div>
          <div className={styles.input}>
            <input type="text" />
            <input type="text" />
            <input type="date" />
            <BiSearch className={styles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
