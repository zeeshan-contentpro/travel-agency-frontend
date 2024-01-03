import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.main}>
        <Image src="./logo.svg" alt="logo" height={40} width={300} />
        <br />
        <small className={styles.article}>
          With access to an extensive network of partners and exclusive deals,
          Travel Buddy brings forth unique travel opportunities at competitive
          prices. Our dedicated support team remains available throughout the
          journey, providing assistance and guidance, ensuring a hassle-free and
          memorable adventure for every traveler.
        </small>
        <br />
        <div className={styles.container}>
          <p>Home</p>
          <p>About Us</p>
          <p>Visa Info</p>
          <p>Contact Us</p>
        </div>
        <br />
        <br />
        <h3>Payment Methods</h3>
        <br />
        <div className={styles.payment}>
          <Image src="/images/visa-sq.png" alt="visa" width={80} height={80} />
          <Image
            src="/images/masterc-sq.png"
            alt="mastercard"
            width={80}
            height={80}
          />
          <Image src="/images/amex-sq.png" alt="amex" width={80} height={80} />
          <Image
            src="/images/bkash-sq.png"
            alt="bkash"
            width={80}
            height={80}
          />
          <Image src="/images/nagad.png" alt="bkash" width={80} height={80} />
          <Image src="/images/rocket.png" alt="bkash" width={80} height={80} />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          {" "}
          © Copyright {new Date().getFullYear()} Travel buddy, All rights
          reserved.
        </p>
      </div>
    </>
  );
}
