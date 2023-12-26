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
        Lorem ipsum dolor sit amet consectetur. Adipiscing metus felis et cursus
        id facilisis convallis tincidunt neque.
      </p>
      <div className={styles.container}>
        {filteredPackages.map((item) => (
          <PackageCard
            key={item.id}
            imageUrl={item.url}
            city={item.city}
            country={item.country}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}
