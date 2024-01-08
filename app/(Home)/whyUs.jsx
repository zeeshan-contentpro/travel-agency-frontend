import styles from "./whyUs.module.css";
import { AiOutlineSafety } from "react-icons/ai";

function Card({ title, article, backGround = "white", font = "black" }) {
  return (
    <div
      className={styles.card}
      style={{ background: backGround, color: font }}
    >
      <AiOutlineSafety className={styles.icon} />
      <br />
      <h2>{title}</h2>
      <br />
      <p>{article}</p>
    </div>
  );
}
export default function WhyUs() {
  return (
    <div className={styles.main}>
      <h1>Why Travel Buddy</h1>
      <br />
      <p>
        Tailored experiences, exclusive deals, and impeccable support define us.
        We deliver personalized travel, unbeatable offers, and unwavering
        reliability.
      </p>
      <div className={styles.container}>
        <Card
          title="Expertise and Personalized Service"
          article="Clients choose your travel agency for its personalized approach and expertise. Your agents take the time to understand individual preferences, curating tailored experiences that suit varied interests and budgets. Whether it's a luxury getaway, a family vacation, or a business trip, your agency's attention to detail and personalized recommendations stand out"
        />
        <Card
          font="white"
          backGround="#006628"
          title="Extensive Network and Exclusive Deals"
          article="Your agency's wide network and partnerships grant access to exclusive deals, discounts, and unique packages that clients can't find elsewhere. This advantage allows travelers to enjoy cost savings without compromising on quality. The ability to secure reservations in sought-after destinations or accommodations during peak seasons sets your agency apart."
        />
        <Card
          title="Exceptional Customer Support and Reliability"
          article="Clients value your agency's commitment to excellent customer support and reliability. From pre-trip planning to post-travel assistance, your team ensures a seamless experience, addressing queries, providing guidance, and even assisting with unexpected changes or emergencies. The reliability and dedication exhibited by your agents build trust and loyalty among your clientele."
        />
      </div>
    </div>
  );
}
