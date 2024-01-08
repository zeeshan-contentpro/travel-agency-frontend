"use client";
import { package_data } from "@/data/data";
import PackageCard from "./packageCard";
import styles from "./packages.module.css";

export default function Packages() {
  const filteredPackages = package_data.filter((item) => item.rating >= 4.5);
  // console.log(filteredPackages);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Our popular packages</h1>
      <p>
        Travel Buddy packages cater to diverse travel styles and preferences,
        offering a range of options from adventurous escapades to luxurious
        getaways. Each package is meticulously curated to include
        accommodations, activities, and unique experiences tailored to the
        client&apos;s desires, ensuring an unforgettable journey.
      </p>
      <div className={styles.container}>
        {filteredPackages.map((item) => (
          <PackageCard
            key={item.id}
            imageUrl={item.url}
            city={item.city}
            country={item.country}
            hotel={item.hotel_name}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}
