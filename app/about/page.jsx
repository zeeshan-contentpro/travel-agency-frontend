import styles from "./page.module.css";

export const metadata = {
  title: "About Us",
  description: "Escape to your dream destination",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>About Us</h1>
      </header>

      <article>
        <h2>Who We Are?</h2> <br />
        Travel buddy is a Travel Package Aggregator Company. It started its
        journey back in 2015 with a lot many innovative ideas and enthusiasm to
        take the traveling business of Bangladesh into the very next level. It’s
        high time we thought about making the life easier of the travelers with
        a few but important services like package comparisons, one stop
        solution, the best deal in low price and so on. Travel buddy with its
        strong and challenging team believes in quick service and maximum
        customer satisfactions. Working together with the travel agencies
        relentlessly, it’s our motto to maximize the number of travelers of
        Bangladesh triple of that it is now within couple of years.
      </article>
      <div className={styles.section1}>
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80"
            alt="us"
          />
        </div>

        <div className={styles.right}>
          <h1>Lorem ipsum dolor amut</h1>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ad,
            deleniti, aperiam consectetur blanditiis praesentium culpa odit
            debitis deserunt vitae laudantium fugiat cupiditate ipsam
            accusantium quis, sunt qui voluptas inventore doloremque assumenda!
            Vitae et id, explicabo quasi saepe tenetur! Quisquam, repudiandae.
            Quasi, similique iure dolorem dignissimos facere iusto inventore
            officiis.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ad,
            deleniti, aperiam consectetur blanditiis praesentium culpa odit
            debitis deserunt vitae laudantium fugiat cupiditate ipsam
            accusantium quis, sunt qui voluptas inventore doloremque assumenda!
            Vitae et id, explicabo quasi saepe tenetur! Quisquam, repudiandae.
            Quasi, similique iure dolorem dignissimos facere iusto inventore
            officiis.
          </p>
        </div>
      </div>
    </main>
  );
}
