"use client";
import { useState } from "react";
import styles from "./nav.module.css";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

function Menu({ close }) {
    return (
        <div className={styles.menu}>
            <div className={styles.left} onClick={() => close()}></div>
            <div className={styles.right}>
                <Link href="/" onClick={() => close()}>Home</Link>
                <hr className={styles.line}/>
                <Link  href="/" onClick={() => close()}>About us</Link>
                <hr className={styles.line}/>
                <Link href="/visa" onClick={() => close()}>Visa info</Link>
                <hr className={styles.line}/>
                <Link href="/" onClick={() => close()}>Contact us</Link>
         
            </div>
        </div>
    );
}

export default function Nav() {
    const [viewMenu, setViewMenu] = useState(false);
    return (
        <>
            <div
                className={styles.main}
                style={viewMenu ? { background: "rgba(0, 0, 0, 0.9)" } : null}
            >
                <img className={styles.logo} src="./logo.svg" alt="logo" />
                {!viewMenu ? (
                    <BiMenu
                        className={styles.icon}
                        onClick={() => setViewMenu(true)}
                    />
                ) : (
                    <IoClose
                        className={styles.icon}
                        onClick={() => setViewMenu(false)}
                    />
                )}
            </div>
            {viewMenu && (
                <Menu
                    close={() => {
                        setViewMenu(close);
                    }}
                />
            )}
        </>
    );
}