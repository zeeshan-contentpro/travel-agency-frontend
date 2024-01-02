"use client";
import React from "react";
import styles from "./hotelDetailsCard.module.css";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react';
const HotelDetailsCard = ({
  id,
  hotelName,
  city,
  country,
  location,
  pricePackage,
  duration,
  person,
  description,
}) => {
  const router = useRouter();
  const { data: session } = useSession();
  function handleClick() {
    const hotelInfo = {
      id,
      hotelName,
      city,
      country,
      location,
      pricePackage,
      duration,
      person,
    };

    function showAlertBeforeSave() {
      const shouldSave = confirm("Are you sure you want to book the package?");

      if (shouldSave) {
        saveDataToLocalStorage();
      } else {
        console.log("User cancelled booking the package.");
      }
    }

    function saveDataToLocalStorage() {
      localStorage.setItem("hotelInfo", JSON.stringify(hotelInfo));
    }

    showAlertBeforeSave();
    if (session){
      router.push('/dashboard');
    } else {
      router.push('/login');
    }

  }

  return (
    <div className={styles.main}>
      <div className={styles.topContainer}>
        <div className={styles.gallery}>
          <p>All photos</p>
          <p>Map</p>
        </div>
        <div className={styles.priceContainer}>
          <div className={styles.left}>
            <h2>{hotelName}</h2>
            <h4>{location}</h4>
          </div>

          <div className={styles.right}>
            <h2 className={styles.price}>৳{pricePackage.toFixed(2)}</h2>
            <button className={styles.bookButton} onClick={handleClick}>
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h1>
          {hotelName}, {location}
        </h1>{" "}
        <br />
        <p>DURATION : {duration}</p>
        <p>PERSON : {person}</p>
        <p>AIRFARE : NO</p>
        <p>COUNTRY : {country.toUpperCase()}</p>
        <br />
        <p>{description}</p>
        <br />
        <br />
        <h3>Holiday Inclusions</h3>
        <br />
        <ul>
          <li>Meal Type at Resort: Half Board / Full Board / All-Inclusive</li>
          <li>Return shared Transfer from Airport/Jetty to Resort</li>
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
          <li>Tips</li> <li> Any Personal Activities Covid-19 Test (if any)</li>
        </ul>
        <br />
        <br />
        <p>
          <b>
            Remarks: <br />
            *Booking Window: Till 31 Jan 2024 <br /> *Travel Window: 11 March-30
            April 2024 (Subject to Availability) <br /> *Minimum Stay 3 Nights
            Required <br /> *Minimum 2 Adults Required <br />
            *3N Sunrise Water Villa with Plunge Pool & Jacuzzi: 161,457/- per
            Adult with All (Breakfast, Lunch, dinner, snacks, drinks, and
            non-motorized water sports)
          </b>
          <br />
          <br />
          Add City Hotel: Season Holidays, Hulhumale (Super Deluxe Sea view), or
          Similar with BB & shared Car Transfer: 15,000/- per night for 2 Adults
          <br />
          *Due to the instability of the dollar exchange rate, the price could
          change anytime. <br /> Child supplement (02-11.99yrs): 50% of adult
          prices <br />
          <br />
        </p>
        <p>Inclusions:</p>
        <br />
        <ul>
          <li>3-night Sunrise Water Villa with Plunge Pool & Jacuzzi </li>
          <li>
            All-Inclusive basis Meals (•All-inclusive: Buffet-style breakfast,
            lunch, and dinner in your allocated restaurant • Selected drinks by
            the glass including bottled water, house wine, draught beer, and a
            selection of cocktails • Selected snacks • Wi-Fi.)
          </li>
        </ul>
        <br />
        <br />
        <p>
          Return shared Speedboat transfer Payment Policy: <br /> <br /> Advance
          booking fee: <br /> <br /> 1. 80% advanced payment while confirming
          the booking <br /> 2. Rest 20% can be paid before 14 days of the tour,
          if the tour date is within 14 days then full payment is required
        </p>
        <br />
        <br />
        <br />
        <h3>Refund/Return policy</h3>
        <br />
        <br />
        <b>
          Most of our holiday packages are non refundable but in some cases we
          may allow the cancellation and do the refund:
        </b>
        <br />
        <p>If you cancel the holiday then the refund criteria will be:</p>
        <br />
        <p>
          You, or any member of your party, may cancel their travel arrangements
          at any time. Written notification or an e-mail to that effect from the
          person who made the booking must be received at our offices. The
          applicable cancellation charges are as per the published refund policy
          below:
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
        <br />
        <br />
        <button className={styles.inputButton} onClick={handleClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelDetailsCard;
