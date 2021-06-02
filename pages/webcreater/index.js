import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { webcreaters: data },
  };
};

const Webcreater = ({ webcreaters }) => {
  return (
    <>
      <Head>
        <title>Web Creater | Listing </title>
        <meta name="keywords" content="Web Creater" />
      </Head>
      <div>
        <h1>All Web Creaters!</h1>
        {webcreaters.map((webcreater) => (
          <Link href={`/webcreater/${webcreater.id}`} key={webcreater.id}>
            <a className={"single"}>
              <h3>{webcreater.name}</h3>
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .single {
          padding: 2px 16px;
          background: #fff;
          display: block;
          margin: 20px 10px;
          border-left: 8px solid #fff;
        }

        .single:hover {
          border-left: 8px solid #4979ff;
        }
      `}</style>
    </>
  );
};

export default Webcreater;
