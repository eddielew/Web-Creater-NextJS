export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((webcreater) => {
    return {
      params: { id: webcreater.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { webcreater: data },
  };
};

const Details = ({ webcreater }) => {
  return (
    <div>
      <h1 className="text-gray-600 font-bold my-2">Details</h1>
      <h1 className="text-gray-600 font-bold my-2">{webcreater.name}</h1>
      <p className="text-gray-500 text-3xl my-2">{webcreater.email}</p>
      <p className="text-gray-500 text-3xl my-2">{webcreater.website}</p>
      <p className="text-gray-500 text-3xl my-2">{webcreater.address.city}</p>
      <style jsx>{``}</style>
    </div>
  );
};

export default Details;
