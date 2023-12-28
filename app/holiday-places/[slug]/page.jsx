"use client";
import React from "react";
// import { BsFilter } from "react-icons/bs";
// import { IoSearch } from "react-icons/io5";
import styles from "./page.module.css";
import DestinationCard from "./destinationCard";
import { package_data } from "@/data/data";
// import HolidayCard from "./holidayCard";

function capitalizeFirstLetter(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  // Join the capitalized words back into a string
  const capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}

const renderSingleCityHotels = (city) => {
  const filteredCityData = package_data.filter((item) => item.city === city);

  // const country = [...new Set(filteredCityData.map((item) => item.country))];

  // const filteredCountryData = package_data.filter(
  //   (item) => item.country == country && item.rating >= 4.5
  // );

  const cityCards = filteredCityData.map((item, i) => (
    <div key={i}>
      <DestinationCard
        id={item.id}
        imageUrl={item.url}
        city={item.city}
        hotelName={item.hotel_name}
        location={item.location}
        pricePerDay={item.price_day}
        rating={item.rating}
        packagePrice={item.price_package}
      />
    </div>
  ));

  // const totalHolidaysFound = 5;
  // const totalHolidaysFound = filteredCityData.length;

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.subtitle}>Hotels in {city}</h1>
        <article className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
          ipsam nobis distinctio ad nisi, totam itaque suscipit rem, neque
          veritatis quas qui officia numquam ex enim est? Officia, accusantium.
          Doloribus!
        </article>
      </div>
      <div className={styles.containerMain}>
        {/* <div className={styles.left}>
          <div className={styles.totalHolidaysFound}>
            <IoSearch className={styles.icon} />
            <h2>{totalHolidaysFound} holidays found </h2>
          </div>
          <div className={styles.filterHeader}>
            <BsFilter className={styles.icon} />
            <h2 className={styles.filterHead}>Filter</h2>
          </div>

          <div className={styles.leftFilterItems}>
            <h3>View</h3>
            <hr />
            <div className={styles.inputButtons}>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb1" />
                <label htmlFor="cb1">Beach</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb2" />
                <label htmlFor="cb2">City Tours</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb3" />
                <label htmlFor="cb3">Hill Station</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb4" />
                <label htmlFor="cb4">Heritage</label>
              </div>
            </div>
          </div>
          <div className={styles.leftFilterItems}>
            <h3>Type</h3>
            <hr />
            <div className={styles.inputButtons}>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb5" />
                <label htmlFor="cb5">Honeymoon</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb6" />
                <label htmlFor="cb6">Adventure</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb7" />
                <label htmlFor="cb7">Romantic</label>
              </div>
              <div className={styles.inputButton}>
                <input type="checkbox" id="cb8" />
                <label htmlFor="cb8">Relax</label>
              </div>
            </div>
          </div>
        </div> */}

        <div className={styles.middle}>
          {/* <div className={styles.sorting}>
            <h2>Sort results by</h2>
          </div> */}
          <div className={styles.cardContainer}>{cityCards}</div>
        </div>
        {/* <div className={styles.right}>
          <h3>Explore more in {country}</h3>
          <div className={styles.cardContainer2}>
            {filteredCountryData.map((item, index) => (
              <HolidayCard
                key={index}
                imageUrl={item.url}
                city={item.city}
                availability={`${totalHolidaysFound} Hotels Available`}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default function HolidayCardItem({ params }) {
  const str = params?.slug;
  const str2 = str.replaceAll("-", " ");
  const city = capitalizeFirstLetter(str2);

  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>Make Your Holiday Special</h1>
      </header>

      {renderSingleCityHotels(city)}
    </main>
  );
}
