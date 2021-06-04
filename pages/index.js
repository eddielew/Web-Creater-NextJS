import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Creater | Home </title>
        <meta name="keywords" content="Web Creater" />
      </Head>

      <div>
        <h1 className="pb-5 text-gray-600 font-bold text-center">Homepage</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure,
          facere vitae beatae repellat sint, minus a corporis vel odit earum
          placeat recusandae quae quisquam culpa ratione unde reiciendis ex iste
          cum nam tenetur sed illo? Odio itaque beatae officiis?
        </p>
        <br />
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga
          enim exercitationem reiciendis praesentium accusamus dignissimos vel
          mollitia accusantium cum harum, in repudiandae molestias officia
          libero, commodi sit optio dolorum recusandae nulla, possimus non?
          Deserunt illum praesentium voluptates commodi odit.
        </p>
        <Link href="/webcreater">
          <a className="w-36 block text-white my-5 mx-auto p-2 text-center rounded-md bg-blue-500">
            See WebCreater Listing
          </a>
        </Link>
      </div>
    </>
  );
}
