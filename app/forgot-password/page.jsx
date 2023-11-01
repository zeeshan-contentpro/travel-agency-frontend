/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const ForgotPassword = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Forgot Password?</h1>
          <p className={styles.subheader}>
            No problem. Just enter your email address below — we’ll send you a
            link to reset it.
          </p>
        </div>

        <div className={styles.inputDiv}>
          <div className={styles.inputItems}>
            <label htmlFor="" className={styles.inputLabel}>
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={styles.inputItem}
            />
          </div>

          <button className={styles.inputButton}>Send Email</button>

          <p className={styles.bottomText}>
            Remembered your password?{" "}
            <Link href="/login" className={styles.inputText}>
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
