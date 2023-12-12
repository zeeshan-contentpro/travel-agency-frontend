"use client";
import styles from "./cityCard.module.css";
import { useRouter } from "next/navigation";

export default function CityCard({ imageUrl, name }) {
  const router = useRouter();

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push(`/holiday-places/${name}`)}
    >
      <div className={styles.container}>
        <h2>{name}</h2>
      </div>
    </div>
  );
}
