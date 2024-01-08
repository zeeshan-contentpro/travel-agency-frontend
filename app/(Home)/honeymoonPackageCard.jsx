"use client";
import Image from "next/image";
import styles from "./honeymoonPackageCard.module.css";
import { useRouter } from "next/navigation";

export default function HoneymoonPackageCard({
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
    <div className={styles.main}>
      {/* //TODO: need to fix the height and width */}
      <Image src={imageUrl} alt="" width={200} height={100} />
      <div className={styles.container}>
        <h3>
          {city}, {country}
        </h3>
        <small>
          Vibrant city, pulse with modern energy, while rural villages maintain
          traditional ways of life.
        </small>
        <p>{duration}</p>

        <button
          onClick={() =>
            router.push(`/holiday-places/${cityName}/${hotelName}`)
          }
        >
          View more
        </button>
      </div>
    </div>
  );
}
