import ContactUs from "./contactUs";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us",
  description: "Escape to your dream destination",
};

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
