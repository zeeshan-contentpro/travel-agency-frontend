"use client";
import styles from "./page.module.css";
import { package_data } from "@/data/data";
import { countriesArray } from "@/data/countries";
import CityCard from "./cityCard";

export const metadata = {
  title: "Holiday Places",
  description: "Escape to your dream destination",
};

const renderCitiesInASingleCountry = (country) => {
  const filteredCityData = package_data.filter((dt) => dt.country === country);
  const uniqueCities = [...new Set(filteredCityData.map((item) => item.city))];
  // console.log(filteredCityData);

  const cityCards = uniqueCities.map((city) => (
    <div key={city.id}>
      <CityCard
        imageUrl="https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
        name={city}
      />
    </div>
  ));

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
        return renderCitiesInASingleCountry(country);
      })}
    </main>
  );
};

export default Holiday;
