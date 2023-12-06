"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
// import Tab from "@/components/Tab";
// import Panel from "@/components/Panel";

const tabs = ["One Way", "Round Trip", "Multi City"];
const panels = ["Panel One", "Panel Two", "Panel Three"];

const Flight = ({
  imageUrl = "https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  const [currTab, setCurrTab] = useState(0);

  const handleChange = (tab) => {
    setCurrTab(tab);
  };

  // console.log(currTab);

  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.header}>
          <Image src={imageUrl} alt="destination" width={1280} height={720} />

          <br />

          <div className={styles.topContainer}>
            <div className={styles.title}>
              <h1>Where to Fly?</h1>
              <p>Find Cheap Flights, Airline Tickets in Worldwide</p>
            </div>
            {/* <div className={styles.gallery}>
              <p>All photos</p>
              <p>Map</p>
            </div> */}
            <div className={styles.flightContainer}>
              <div className={styles.top}>
                <div className={styles.left}>
                  {/* <div>
                    {tabs.map((tab, index) => {
                      return (
                        <Tab
                          key={index}
                          tab={tab}
                          onClick={() => handleChange(index)}
                        />
                      );
                    })}
                  </div> */}
                  {/* <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="oneway"
                      name="oneway"
                      value="One Way"
                      checked="checked"
                    />
                    <label htmlFor="">One Way</label>

                    <input
                      type="radio"
                      id="roundtrip"
                      name="roundtrip"
                      value="Round Trip"
                    />
                    <label htmlFor="">Round Trip</label>
                  </div> */}
                  {/* <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="roundtrip"
                      name="roundtrip"
                      value="Round Trip"
                    />
                    <label htmlFor="">Round Trip</label>
                  </div> */}
                  {/* <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="multicity"
                      name="multicity"
                      value="Multi City"
                    />
                    <label htmlFor="">Multi City</label>
                  </div> */}
                </div>

                <div className={styles.right}>
                  {/* <ClickableButton /> */}
                  <p>Button</p>
                </div>
              </div>

              {/* <div className={styles.bottom}>
                {panels.map((panel, index) => {
                  return (
                    <Panel
                      key={index}
                      currTab={currTab}
                      index={index}
                      panel={panel}
                    />
                  );
                })}
                <div className={styles.inputDiv}>
                  <input type="text" />
                  <input type="text" />
                  <input type="date" />
                  <BiSearch className={styles.icon} />
                </div>
              </div> */}
            </div>
          </div>

          <div className={styles.container}>
            <h1>Top Flight Deals</h1>
            <br />
            {/* <FlightDealsCarousel /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
