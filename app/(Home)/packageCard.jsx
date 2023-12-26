"use client";
import styles from "./packageCard.module.css";
import { useRouter } from "next/navigation";

export default function PackageCard({
  imageUrl,
  city,
  country,
  duration,
  params,
}) {
  const router = useRouter();
  // console.log(params);

  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => router.push("/details")}
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
