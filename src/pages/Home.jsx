import Carousel from "../components/carousel";
import useFetch from "../hooks/usefetch";
import Card from "../components/card";

const Home = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  console.log(data, isLoading, error);

  return (
    <>
      <Carousel />

      <section
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: " 20px",
        }}
      >
        {data.map((p) => (
          <Card key={p.id} {...p} />
        ))}
      </section>
    </>
  );
};

export default Home;
