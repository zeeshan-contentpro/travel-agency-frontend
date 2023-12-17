/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { signIn } from "next-auth/react";
import styles from "./page.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.header}>Welcome!</h1>
          <p className={styles.subheader}>
            Welcome to Tavel Buddy! Sign In to continue
          </p>
        </div>

        <div className={styles.inputSocial}>
          <FcGoogle
            className={styles.socialIcon}
            onClick={() => signIn("google")}
          />
          <FaFacebookF className={styles.socialIcon} />
        </div>

        <span className={styles.spanText}>Or Sign In with</span>

        <form onSubmit={submitHandler} className={styles.inputForm}>
          <div className={styles.inputItems}>
            <label htmlFor="email_field" className={styles.inputLabel}>
              Email
            </label>
            <input
              type="email"
              id="email_field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
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

          <p className={styles.inputText}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </p>

          <button type="submit" className={styles.inputButton}>
            Sign In
          </button>

          <p className={styles.bottomText}>
            Don't have an account ?{" "}
            <Link href="/signup" className={styles.inputText}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
