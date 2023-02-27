import styles from "./whyUs.module.css";
import { AiOutlineSafety } from "react-icons/ai";

function Card({ title, article, backGround = "white", font = "black" }) {
    return (
        <div
            className={styles.card}
            style={{ background: backGround, color: font }}
        >
            <AiOutlineSafety className={styles.icon}/>
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
                Lorem ipsum dolor sit amet consectetur. Adipiscing metus felis
                et cursus id facilisis convallis tincidunt neque.
            </p>
            <div className={styles.container}>
                <Card
                    title="Lorem ipsum dolor"
                    article="Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat mattis amet cursus ante viverra nulla. Etiam sed curabitur egestas risus dui. Tempor fames nullam scelerisque vel diam. A ac dui nunc turpis nibh nibh. Facilisi a odio aliquam ut interdum amet."
                />
                <Card
                    font="white"
                    backGround="#006628"
                    title="Lorem ipsum dolor"
                    article="Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat mattis amet cursus ante viverra nulla. Etiam sed curabitur egestas risus dui. Tempor fames nullam scelerisque vel diam. A ac dui nunc turpis nibh nibh. Facilisi a odio aliquam ut interdum amet."
                />
                <Card
                    title="Lorem ipsum dolor"
                    article="Lorem ipsum dolor sit amet consectetur. Adipiscing volutpat mattis amet cursus ante viverra nulla. Etiam sed curabitur egestas risus dui. Tempor fames nullam scelerisque vel diam. A ac dui nunc turpis nibh nibh. Facilisi a odio aliquam ut interdum amet."
                />
            </div>
        </div>
    );
}
