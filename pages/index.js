import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Creater | Home </title>
        <meta name="keywords" content="Web Creater" />
      </Head>

      <div>
        <h1 className={"title"}>Homepage</h1>
        <p className={"text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure,
          facere vitae beatae repellat sint, minus a corporis vel odit earum
          placeat recusandae quae quisquam culpa ratione unde reiciendis ex iste
          cum nam tenetur sed illo? Odio itaque beatae officiis?
        </p>
        <p className={"text"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
          enim exercitationem reiciendis praesentium accusamus dignissimos vel
          mollitia accusantium cum harum, in repudiandae molestias officia
          libero, commodi sit optio dolorum recusandae nulla, possimus non?
          Deserunt illum praesentium voluptates commodi odit.
        </p>
        <Link href="/webcreater">
          <a className={"btn"}>See WebCreater Listing</a>
        </Link>

        <style jsx>{`
          .title {
            color: #333;
            padding-bottom: 20px;
            text-align: center;
          }
          .text {
            color: #777;
          }
          .btn {
            display: block;
            width: 150px;
            padding: 8px 0;
            margin: 20px auto;
            background: #4979ff;
            border-radius: 4px;
            color: white;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
}
