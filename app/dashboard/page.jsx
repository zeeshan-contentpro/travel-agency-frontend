"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{session?.user.name}</h3>
      <p>{session?.user.email}</p>
      <Image src={session?.user.image} alt="" height={300} width={300} />
    </div>
  );
};

export default Dashboard;
