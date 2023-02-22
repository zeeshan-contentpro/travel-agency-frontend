import styles from "./packageCard.module.css";

export default function PackageCard({
  imageUrl,
  name = "n/a",
  duration = "n/a",
}) {
  return (
    <div
      className={styles.main}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.container}>
        <h3>{name}</h3>
        <p>{duration}</p>
      </div>
    </div>
  );
}
