"use client";
import React from "react";
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
          The city beckons with its enchanting mix of lush landscapes, from
          serene rice terraces to cascading waterfalls, inviting travelers to
          discover a paradise where spirituality and natural beauty converge
          seamlessly.
        </article>
      </div>
      <div className={styles.containerMain}>{cityCards}</div>
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
