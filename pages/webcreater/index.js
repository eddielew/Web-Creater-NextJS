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
        <h1 className="pb-5 text-gray-600 font-bold text-center text-3xl">
          All Web Creaters!
        </h1>
        {webcreaters.map((webcreater) => (
          <Link href={`/webcreater/${webcreater.id}`} key={webcreater.id}>
            <a className="block bg-white border-white border-l-8 hover:border-blue-500 my-4 pl-8 py-6 text-2xl">
              <h3 className="text-gray-600 font-bold text-2xl">
                {webcreater.name}
              </h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Webcreater;
