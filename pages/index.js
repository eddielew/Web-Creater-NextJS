import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Creater | Home </title>
        <meta name="keywords" content="Web Creater" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure,
          facere vitae beatae repellat sint, minus a corporis vel odit earum
          placeat recusandae quae quisquam culpa ratione unde reiciendis ex iste
          cum nam tenetur sed illo? Odio itaque beatae officiis?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
          enim exercitationem reiciendis praesentium accusamus dignissimos vel
          mollitia accusantium cum harum, in repudiandae molestias officia
          libero, commodi sit optio dolorum recusandae nulla, possimus non?
          Deserunt illum praesentium voluptates commodi odit.
        </p>
        <Link href="/webcreater">
          <a className={styles.btn}>See WebCreater Listing</a>
        </Link>
      </div>
    </>
  );
}
