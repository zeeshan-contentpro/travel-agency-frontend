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
        take the traveling business of Bangladesh into the very next level.
        It&apos;s high time we thought about making the life easier of the
        travelers with a few but important services like package comparisons,
        one stop solution, the best deal in low price and so on. Travel buddy
        with its strong and challenging team believes in quick service and
        maximum customer satisfactions. Working together with the travel
        agencies relentlessly, it&apos;s our motto to maximize the number of
        travelers of Bangladesh triple of that it is now within couple of years.
      </article>
      <div className={styles.section1}>
        <div className={styles.left}>
          <img
            src="https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80"
            alt="us"
          />
        </div>

        <div className={styles.right}>
          <h1>Embrace the Globe</h1>
          <br />
          <p>
            Travel Buddy isn&apos;t just a travel agency; it&apos;s a
            personalized gateway to the world&apos;s wonders. With a commitment
            to tailored experiences, our team of experts diligently crafts each
            journey, ensuring it aligns perfectly with your aspirations. From
            the first consultation to the trip&apos;s conclusion, Travel Buddy
            remains your dedicated companion, navigating through destinations,
            securing exclusive deals, and providing unparalleled support, making
            every adventure a seamless and unforgettable tale. <br />
            <br />
            At Travel Buddy, our ethos revolves around making travel not just a
            destination, but an experience that resonates. Our array of
            meticulously designed packages caters to diverse interests,
            promising immersive encounters, whether you seek cultural immersion,
            adrenaline-pumping escapades, or serene getaways. With an extensive
            network of partners and a focus on personalized service, Travel
            Buddy invites you to explore the world with confidence, comfort, and
            a touch of bespoke elegance.
          </p>
        </div>
      </div>
    </main>
  );
}
