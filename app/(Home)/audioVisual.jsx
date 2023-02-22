import styles from "./audioVisual.module.css";

export default function AudioVidual() {
  return (
    <div className={styles.main}>
      <video mute>
        <source />
      </video>
    </div>
  )
}
