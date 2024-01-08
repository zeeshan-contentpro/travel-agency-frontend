import styles from "./howWorks.module.css";

export default function HowWorks() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>How travel buddy works</h1>
      <br />
      <p className={styles.article}>
        Travel Buddy operates as your ultimate travel companion, offering a
        seamless experience from start to finish. Clients share their
        preferences and interests, and our expert agents craft customized
        itineraries, ensuring every detail aligns with their desires.
      </p>
    </div>
  );
}
