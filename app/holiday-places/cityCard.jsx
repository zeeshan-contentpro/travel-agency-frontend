"use client";
import styles from "./cityCard.module.css";
import { useRouter } from "next/navigation";

export default function CityCard({ imageUrl, cityName, hotelsAvailable }) {
  const router = useRouter();
  // console.log(cityName);
  // console.log(hotelsAvailable);

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push(`/holiday-places/${cityName}`)}
    >
      <div className={styles.container}>
        <h2>{cityName}</h2>
        {/* <p>{hotelsAvailable} hotels available</p> */}
      </div>
    </div>
  );
}
