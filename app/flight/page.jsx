import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import styles from "./page.module.css";
import ClickableButton from "@/components/ClickableButton";

const Flight = ({
  imageUrl = "https://images.unsplash.com/photo-1532364158125-02d75a0f7fb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className={styles.header}>
          <Image src={imageUrl} alt="destination" width={1280} height={720} />

          <br />

          {/* <div>
            <h1 className={styles.title}>Where to Fly?</h1>
            <h3 className={styles.subtitle}>
              Find Cheap Flights, Airline Tickets in Bangladesh
            </h3>
          </div> */}

          <div className={styles.topContainer}>
            <div className={styles.flightContainer}>
              <div className={styles.top}>
                <div className={styles.left}>
                  <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="oneway"
                      name="oneway"
                      value="One Way"
                    />
                    <label htmlFor="">One Way</label>
                  </div>
                  <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="roundtrip"
                      name="roundtrip"
                      value="Round Trip"
                    />
                    <label htmlFor="">Round Trip</label>
                  </div>
                  <div className={styles.btnradio}>
                    <input
                      type="radio"
                      id="multicity"
                      name="multicity"
                      value="Multi City"
                    />
                    <label htmlFor="">Multi City</label>
                  </div>
                </div>

                <div className={styles.right}>
                  <ClickableButton />
                </div>
              </div>

              <div className={styles.bottom}>
                <div className={styles.input}>
                  <input type="text" />
                  <input type="text" />
                  <input type="date" />
                  <BiSearch className={styles.icon} />
                </div>
              </div>
            </div>
          </div>

          {/* <div className={styles.container}>
            <h1>Adaaran Club Rannalhi, Maldives</h1> <br />
            <p>DURATION : 4 DAYS & 3 NIGHTS</p>
            <p>AIRFARE : NO</p>
            <p>COUNTRY : MALDIVES</p>
            <br />
            <p>
              The Maldives consists of 1,190 islands located in the Indian
              Ocean, southwest of India. They offer seclusion, breathtaking
              ocean views, and the most luxurious overwater villas in the World.
              Amazing scuba diving, snorkeling, and surfing help make the
              Maldives a unique and fantastic beach destination.
            </p>
            <br />
            <br />
            <h3>Holiday Inclusions</h3>
            <br />
            <ul>
              <li>
                Meal Type at Resort: Half Board / Full Board / All-Inclusive
              </li>
              <li>Return shared Transfer from Jetty to Resort</li>
              <li>All Service Charges</li>
              <li>All Taxes</li>
            </ul>
            <br />
            <br />
            <h3>Holiday Exclusions</h3>
            <br />
            <ul>
              <li>
                Airfare (US Bangla: Starting from 40,000 taka per person approx.
                ***Depends on time and availability)
              </li>
              <li> Visa Fee or, Port Entry Fee (If Any)</li>
              <li>Tips</li>{" "}
              <li> Any Personal Activities Covid-19 Test (if any)</li>
            </ul>
            <br />
            <br />
            <p>
              <b>
                Remarks: *Booking Window: Till 31 Jan 2023 <br /> Travel Window:
                11 Jan-30 April 2023 (Subject to Availability) <br /> *Minimum
                Stay 3Nights Required* <br /> Minimum 2 Adults Required <br />
                3N Sunrise Water Villa with Plunge Pool & Jacuzzi: 161,457/- per
                Adult with AI (Breakfast, Lunch, dinner, snacks, drinks, and
                non-motorized water sports)
              </b>
              <br />
              <br />
              Add City Hotel: Season Holidays, Hulhumale (Super Deluxe Sea
              view), or Similar with BB & shared Car Transfer: 15,000/- per
              night for 2 Adults
              <br />
              *Due to the instability of the dollar exchange rate, the price
              could change anytime. <br /> Child supplement (02-11.99yrs): 50%
              of adult prices <br />
              <br />
            </p>
            <p>Inclusions:</p>
            <br />
            <ul>
              <li>3-night Sunrise Water Villa with Plunge Pool & Jacuzzi </li>
              <li>
                All-Inclusive basis Meals (•All-inclusive: Buffet-style
                breakfast, lunch, and dinner in your allocated restaurant •
                Selected drinks by the glass including bottled water, house
                wine, draught beer, and a selection of cocktails • Selected
                snacks • Wi-Fi.)
              </li>
            </ul>
            <br />
            <br />
            <p>
              Return shared Speedboat transfer Payment Policy: <br /> <br />{" "}
              Advance booking fee: <br /> <br /> 1. 80% advanced payment while
              confirming the booking <br /> 2. Rest 20% can be paid before 14
              days of the tour, if the tour date is within 14 days then full
              payment is required
            </p>
            <br />
            <br />
            <br />
            <h3>Refund/Return policy</h3>
            <br />
            <br />
            <b>
              Most of our holiday packages are non refundable but in some cases
              we may allow the cancellation and do the refund:
            </b>
            <br />
            <p>If you cancel the holiday then the refund criteria will be:</p>
            <br />
            <p>
              You, or any member of your party, may cancel their travel
              arrangements at any time. Written notification or an e-mail to
              that effect from the person who made the booking must be received
              at our offices. The applicable cancellation charges are as per the
              published refund policy below:
            </p>
            <br />
            <br />
            <b>Refund charges:</b> <br />
            <br />
            <ul>
              <li>Prior to 45 days or more: Booking Fee</li>

              <li>Between 44-31 days ahead of departure: 50% of tour cost</li>
              <li>Between 30-16 days of departure: 75% of tour cost</li>
              <li>15 days to date of departure: 100%</li>
              <li>In case of no show: 100%</li>
            </ul>
            <div>
              <button className={styles.inputButton}>Book Now</button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Flight;
