import styles from "./footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.main}>
                <img src="./logo.svg" alt="logo" />
                <br />
                <small className={styles.article}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt repudiandae cumque aut laboriosam suscipit deserunt
                    excepturi nulla consequuntur debitis accusamus animi vero,
                    doloremque quaerat ad eum nostrum voluptatibus impedit
                    culpa! Nam esse aperiam quas deleniti.
                </small>
                <br />
                <div className={styles.container}>
                    <p>Home</p> 
                    <p>About us</p>
                    <p>Visa info</p>
                    <p>Contact us</p>
                    <p>Visa info</p>
                    <p>Contact us</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>
                    {" "}
                    © copyright {new Date().getFullYear()} Travel buddy, All
                    rights reserved.
                </p>
            </div>
        </>
    );
}
