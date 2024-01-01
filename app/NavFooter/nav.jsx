"use client";
import { useEffect, useState } from "react";
import { useSession, signOut, signIn } from "next-auth/react";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import Link from "next/link";
import styles from "./nav.module.css";
import Image from "next/image";
import { redirect } from "next/navigation";

function Menu({ close, logout, user }) {
  return (
    <div className={styles.menu}>
      <div className={styles.left} onClick={() => close()}></div>
      <div className={styles.right}>
        <Link href="/" onClick={() => close()}>
          Home
        </Link>
        <hr className={styles.line} />
        <Link href="/flight" onClick={() => close()}>
          Flights
        </Link>
        <hr className={styles.line} />
        <Link href="/holiday-places" onClick={() => close()}>
          Holiday
        </Link>
        <hr className={styles.line} />
        <Link href="/about" onClick={() => close()}>
          About us
        </Link>
        <hr className={styles.line} />
        <Link href="/visa" onClick={() => close()}>
          Visa info
        </Link>
        <hr className={styles.line} />
        <Link href="/contact" onClick={() => close()}>
          Contact us
        </Link>
        <hr className={styles.line} />
        {user ? (
          <div onClick={logout}>Logout</div>
        ) : (
          <div onClick={() => signIn()}>Login</div>
        )}
      </div>
    </div>
  );
}

export default function Nav() {
  const [viewMenu, setViewMenu] = useState(false);

  const { data: session } = useSession({
    required: false,
  });

  useEffect(() => {
    localStorage.setItem("userId", JSON.stringify(session?.user?.id));
  }, [session?.user?.id]);

  function onLogOutClick() {
    if (confirm("Do you want to logout?")) {
      signOut();
      localStorage.clear();
      redirect("/login");
    } else {
      return;
    }
  }

  return (
    <>
      <div
        className={styles.main}
        style={viewMenu ? { background: "rgba(0, 0, 0, 0.9)" } : null}
      >
        <Link href="/" className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="./logo.svg"
            alt="logo"
            width={300}
            height={50}
          />
        </Link>

        <div className={styles.menuContainer}>
          <Link href="/">Home</Link>
          <Link href="/flight">Flights</Link>
          <Link href="/holiday-places">Holiday</Link>
          <Link href="/about">About us</Link>
          <Link href="/visa">Visa Info</Link>
          <Link href="/contact">Contact</Link>
          {session?.user ? (
            <>
              <div className={styles.icon}>
                <IoPersonCircleOutline />
                <Link href="/dashboard">{session?.user?.name}</Link>
              </div>
              <div className={styles.auth} onClick={onLogOutClick}>
                Logout
              </div>
            </>
          ) : (
            <div className={styles.auth} onClick={() => signIn()}>
              Login
            </div>
          )}
        </div>
        <div className={styles.rightMenuContainer}>
          {!viewMenu ? (
            <BiMenu className={styles.icon} onClick={() => setViewMenu(true)} />
          ) : (
            <IoClose
              className={styles.icon}
              onClick={() => setViewMenu(false)}
            />
          )}
        </div>
      </div>
      {viewMenu && (
        <Menu
          close={() => {
            setViewMenu(close);
          }}
          logout={onLogOutClick}
          user={session?.user}
        />
      )}
    </>
  );
}
