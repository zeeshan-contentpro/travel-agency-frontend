"use client";
import styles from "./holidayCard.module.css";
import { useRouter } from "next/navigation";

export default function HolidayCard({ imageUrl, city, availability }) {
  const router = useRouter();
  const cityInUrl = city.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push(`/holiday-places/${cityInUrl}`)}
    >
      <div className={styles.container}>
        <h2>{city}</h2>
        <h5>{availability}</h5>
      </div>
    </div>
  );
}
