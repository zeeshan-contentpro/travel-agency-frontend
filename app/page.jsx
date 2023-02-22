import Header from "./(Home)/header";
import Packages from "./(Home)/packages";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Packages/>
    </main>
  );
}
