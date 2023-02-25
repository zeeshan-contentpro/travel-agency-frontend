import AudioVisual from "./(Home)/audioVisual";
import Header from "./(Home)/header";
import Offers from "./(Home)/offers";
import Packages from "./(Home)/packages";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Packages/>
      <AudioVisual/>
      <Offers/>
    </main>
  );
}
