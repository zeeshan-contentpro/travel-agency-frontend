"use client";
import { package_data } from "@/data/data";
import styles from "./honeymoonPackage.module.css";
import HoneymoonPackageCard from "./honeymoonPackageCard";

export default function HoneymoonPackages() {
  const filterHoneymoonPackageData = package_data.filter(
    (item) => item.offerCategory === "Honeymoon"
  );

  return (
    <div className={styles.main}>
      <div className={styles.cover}>
        <h1 className={styles.title}>Honeymoon Offers</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.box}>
          {filterHoneymoonPackageData.map((item) => (
            <HoneymoonPackageCard
              key={item.id}
              imageUrl={item.url}
              city={item.city}
              hotel={item.hotel_name}
              country={item.country}
              duration="3 days and 4 nights"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
