import ContactUs from "./contactUs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>Contact Us</h1>
        </header>
      </div>

      <ContactUs />
    </div>
  );
}
