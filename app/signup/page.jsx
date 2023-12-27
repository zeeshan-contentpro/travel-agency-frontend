/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
// import { options } from "../api/auth/[...nextauth]/options";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // const isSession = await getServerSession(options);

  // if (isSession) {
  //   redirect("/dashboard");
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ((!name, !email || !mobile || !password)) {
      setError("All fields are required");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration", error);
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

        <form onSubmit={handleSubmit} className={styles.inputForm}>
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
              <p>{error}</p>
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
