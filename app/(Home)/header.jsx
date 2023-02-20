import styles from "./header.module.css";

export default function Hero() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet consectetur. Donec amet nec leo volutpat cras
        sed sed nec. Sit volutpat massa eget arcu quis. Ornare pellentesque
        risus faucibus ultrices neque.
      </p>
      <div className={styles.container}>
        <input type="text" name="" id="" placeholder="Select a destination..."/>
        <button>Search</button>
      </div>
    </div>
  );
}
