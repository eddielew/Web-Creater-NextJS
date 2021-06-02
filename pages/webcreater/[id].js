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
      <h1>Details</h1>
      <h1>{webcreater.name}</h1>
      <p>{webcreater.email}</p>
      <p>{webcreater.website}</p>
      <p>{webcreater.address.city}</p>
    </div>
  );
};

export default Details;
