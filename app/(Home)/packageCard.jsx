"use client";
import styles from "./packageCard.module.css";
import { useRouter } from "next/navigation";

export default function PackageCard({
  imageUrl,
  name = "n/a",
  duration = "n/a",
}) {
  const router = useRouter();
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push("/details")}
    >
      <div className={styles.container}>
        <h3>{name}</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
}
