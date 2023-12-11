"use client";
import styles from "./page.module.css";
import HolidayCard from "./holidayCard";
import { package_data } from "@/data/data";
import { countries, countriesArray } from "@/data/places";
import CityCard from "./cityCard";

export const metadata = {
  title: "Holiday Places",
  description: "Escape to your dream destination",
};

const renderCitiesOdASingleCountry = (country) => {
  const filteredCityData = package_data.filter((dt) => dt.country === country);
  const uniqueCities = [...new Set(filteredCityData.map((item) => item.city))];
  console.log(uniqueCities);

  const cityCards = filteredCityData.map((dt, i) => (
    <div key={i}>
      <CityCard imageUrl={dt.url} name={dt.city} />
    </div>
  ));

  // const cityCards = filteredCityData.map((dt, i) => (
  //   <div key={i}>
  //     {/* <h1>{dt}</h1> */}
  //     <HolidayCard imageUrl={dt.url} title={dt.hotel_name} name={dt.city} />
  //   </div>
  // ));

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1>Explore {country}</h1>
        <article>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          adipisci voluptate, quod quasi numquam iure alias, ut corporis nam rem
          quo saepe voluptas odio.
        </article>
      </div>
      <div className={styles.cardContainer}>{cityCards}</div>
    </div>
  );
};

const Holiday = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>Explore Your Destinations</h1>
      </header>

      {countriesArray.map((country) => {
        return renderCitiesOdASingleCountry(country);
      })}
    </main>
  );
};

export default Holiday;
