"use client";
import styles from "./packageCard.module.css";
import { useRouter } from "next/navigation";

export default function PackageCard({
  imageUrl,
  city,
  country,
  hotel,
  duration,
}) {
  const router = useRouter();

  const cityName = city.toLowerCase().replace(/\s+/g, "-");
  const hotelName = hotel.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push(`/holiday-places/${cityName}/${hotelName}`)}
    >
      <div className={styles.container}>
        <h3>
          {city}, {country}
        </h3>
        <p>{duration}</p>
      </div>
    </div>
  );
}
