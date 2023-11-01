/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import styles from "./page.module.css";

const Signup = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Let’s Get Started</h1>
          <p className={styles.subheader}>
            Create an account and get the Deals & Promotions news
          </p>
        </div>

        <div className={styles.inputSocial}>
          <FcGoogle className={styles.socialIcon} />
          <FaFacebookF className={styles.socialIcon} />
        </div>

        <span className={styles.spanText}>Or Sign Up with</span>

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
          <div className={styles.inputItems}>
            <label htmlFor="" className={styles.inputLabel}>
              Mobile
            </label>
            <input
              type="text"
              placeholder="01XXXXXXXXX"
              className={styles.inputItem}
            />
          </div>
          <div className={styles.inputItems}>
            <label htmlFor="" className={styles.inputLabel}>
              Password
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className={styles.inputItem}
            />
          </div>

          <button className={styles.inputButton}>Sign Up</button>

          <p className={styles.bottomText}>
            Already have an account ?{" "}
            <Link href="/login" className={styles.inputText}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
