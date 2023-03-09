import styles from "./page.module.css";
import VisaInfo from "./visaInfo";

export default function Page() {
  return (
    <div className={styles.main}>
      <VisaInfo />
    </div>
  );
}
