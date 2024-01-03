"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { package_data } from "@/data/data";
import HotelDetailsCard from "./hotelDetailsCard";

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

const renderSingleHotel = (hotelName) => {
  const filteredHotelData = package_data.filter(
    (item) => item.hotel_name === hotelName
  );

  // console.log(filteredHotelData);

  const hotelDetailsCards = filteredHotelData.map((item, i) => (
    <div key={i}>
      <HotelDetailsCard
        id={item.id}
        hotelName={item.hotel_name}
        city={item.city}
        country={item.country}
        location={item.location}
        pricePackage={item.price_package}
        duration={item.duration}
        person={item.person}
        description={item.description}
      />
    </div>
  ));

  return <div>{hotelDetailsCards}</div>;
};

export default function page({
  params,
}) {
  const str = params?.packageId;
  const str2 = str.replaceAll("-", " ");
  const hotelName = capitalizeFirstLetter(str2);

  // console.log(hotelName);

  return (
    <div
      className={styles.main}
    >
      <div className={styles.header}>
        <div className={styles.overlay}></div>
        {renderSingleHotel(hotelName)}
      </div>
    </div>
  );
}
