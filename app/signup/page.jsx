/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import styles from "./page.module.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if ((!name, !email || !mobile || !password)) {
      setError("All fields are required");
      return;
    }

    try {
      const { data } = await axios
        .post("/api/register", {
          name,
          email,
          mobile,
          password,
        })
        .then((result) => {
          if (result?.error) alert("Invalid Credentials!");
          else window.location.replace("/login");
        });

      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Let’s Get Started</h1>
          <p className={styles.subheader}>
            Create an account and get the Deals & Promotions news
          </p>
        </div>

        {/* <div className={styles.inputSocial}>
          <FcGoogle className={styles.socialIcon} />
          <FaFacebookF className={styles.socialIcon} />
        </div>

        <span className={styles.spanText}>Or Sign Up with</span> */}

        <form onSubmit={submitHandler} className={styles.inputForm}>
          <div className={styles.inputItems}>
            <label htmlFor="name_field" className={styles.inputLabel}>
              Name
            </label>
            <input
              type="text"
              id="name_field"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className={styles.inputItem}
            />
          </div>
          <div className={styles.inputItems}>
            <label htmlFor="email_field" className={styles.inputLabel}>
              Email
            </label>
            <input
              type="email"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className={styles.inputItem}
            />
          </div>
          <div className={styles.inputItems}>
            <label htmlFor="mobile_field" className={styles.inputLabel}>
              Mobile
            </label>
            <input
              type="text"
              id="mobile_field"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="01XXXXXXXXX"
              className={styles.inputItem}
            />
          </div>
          <div className={styles.inputItems}>
            <label htmlFor="password_field" className={styles.inputLabel}>
              Password
            </label>
            <input
              type="password"
              id="password_field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              className={styles.inputItem}
            />
          </div>

          <button type="submit" className={styles.inputButton}>
            Sign Up
          </button>

          {error && (
            <div className={styles.error}>
              <p>Error message</p>
            </div>
          )}

          <p className={styles.bottomText}>
            Already have an account ?{" "}
            <Link href="/login" className={styles.inputText}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
