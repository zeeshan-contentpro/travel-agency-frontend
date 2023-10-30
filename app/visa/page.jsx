import styles from "./page.module.css";
import VisaInfo from "./visaInfo";

export const metadata = {
  title: "Visa Info",
  description: "Escape to your dream destination",
};

export default function Page() {
  return (
    <div className={styles.main}>
      <VisaInfo />
    </div>
  );
}
