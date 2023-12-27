"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import styles from "./page.module.css";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.main}>
      <h1>Dashboard</h1>
      <h3>Hello {session?.user.name}</h3>
      <p>{session?.user.email}</p>
      <Image
        src={session?.user.image}
        alt=""
        height={250}
        width={250}
        className={styles.profileImage}
      />
      <hr />
      <>
        <p>No package booked yet</p>
      </>
    </div>
  );
};

export default Dashboard;
