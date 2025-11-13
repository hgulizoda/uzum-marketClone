import Carousel from "../components/carousel";
import useFetch from "../hooks/useFetch";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";
import SignalWifi2BarLockIcon from "@mui/icons-material/SignalWifi2BarLock";

const Home = () => {
  const { data, isLoading, error } = useFetch("https://dummyjson.com/products");
  const navigate = useNavigate();

  console.log(error.message);

  function handleDetailPage(id, e) {
    e.stopPropagation();
    navigate(`/home/${id}`);
  }

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
          <Card key={p.id} {...p} onClick={(e) => handleDetailPage(p.id, e)} />
        ))}
      </section>
    </>
  );
};

export default Home;
