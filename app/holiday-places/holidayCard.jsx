"use client";
import styles from "./holidayCard.module.css";
import { useRouter } from "next/navigation";

export default function HolidayCard({ imageUrl, title, name, id }) {
  const router = useRouter();

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push(`/holiday-details/${id}`)}
    >
      <div className={styles.container}>
        <h2>{title}</h2>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
