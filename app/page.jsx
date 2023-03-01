import AudioVisual from "./(Home)/audioVisual";
import Header from "./(Home)/header";
import HoneymoonPackages from "./(Home)/honeymoonPackage";
import HowWorks from "./(Home)/howWorks";
import Offers from "./(Home)/offers";
import Packages from "./(Home)/packages";
import WhyUs from "./(Home)/whyUs";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Packages />
            <AudioVisual />
            <Offers />
            <HoneymoonPackages />
            <WhyUs/>
            <HowWorks/>
        </main>
    );
}
