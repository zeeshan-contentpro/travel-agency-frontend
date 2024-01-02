"use client";
import styles from "./page.module.css";
import { package_data } from "@/data/data";
import { countriesArray } from "@/data/countries";
import CityCard from "./cityCard";

// export const metadata = {
//   title: "Holiday Places",
//   description: "Escape to your dream destination",
// };

const renderCitiesInASingleCountry = (country) => {
  const filteredCountryData = package_data.filter(
    (item) => item.country === country
  );
  const uniqueCities = [
    ...new Set(filteredCountryData.map((item) => item.city)),
  ];

  const cityCards = uniqueCities.map((city, i) => {
    // Find the first item matching the city in the filtered data
    const cityData = filteredCountryData.find((item) => item.city === city);

    console.log(cityData.url);

    return (
      <div key={i}>
        <CityCard
          imageUrl={cityData ? cityData.url : ""}
          cityName={city}
          // hotelsAvailable={city.length}
        />
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>Explore {country}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          adipisci voluptate, quod quasi numquam iure alias, ut corporis nam rem
          quo saepe voluptas odio, ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
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

      {countriesArray.map((country, i) => {
        return <div key={i}>{renderCitiesInASingleCountry(country)}</div>;
      })}
    </main>
  );
};

export default Holiday;
