import { CardMedia, Box, Typography, Stack, Button } from "@mui/material";
import uzumCard from "../assets/icons/uzumCard.svg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import useAppContext from "../hooks/useAppContext";

const Card = (product) => {
  const { setCart, cart } = useAppContext();
  const inCart = cart.find((p) => p.id === product.id);
  function moveToCart() {
    if (inCart) {
      const newData = cart.map((p) => {
        if (p.id === product.id) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      });
      setCart(newData);
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  }

  function handleDecrement() {
    if (inCart.count === 1) {
      const NewData = cart.filter((p) => p.id !== product.id);
      setCart(NewData);
    } else {
      if (inCart) {
        const newData = cart.map((p) => {
          if (p.id === product.id) {
            return { ...p, count: p.count - 1 };
          } else {
            return p;
          }
        });
        setCart(newData);
      } else {
        setCart([...cart, { ...product, count: 1 }]);
      }
    }
  }

  return (
    <>
      <Box>
        <CardMedia
          component="img"
          height="309px"
          image={product.thumbnail}
          sx={{ backgroundColor: "#F0F2F5", borderRadius: "8px" }}
        ></CardMedia>
        <Typography
          color="primary"
          sx={{
            alignItems: "center",
            display: "flex",
            gap: "5px",
            fontWeight: "600",
          }}
        >
          ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}{" "}
          <img src={uzumCard} alt="" />
        </Typography>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          ${product.price}
        </Typography>

        <Typography
          sx={{
            backgroundColor: "yellow",
            fontSize: "11px",
            padding: "1px 2px",
            display: "flex",
            justifyContent: "center",
            width: "35%",
          }}
        >
          ${(product.price / 12).toFixed(2)} oyiga
        </Typography>

        <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
          {product.title}
        </Typography>

        {inCart ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            height="32px"
            sx={{
              backgroundColor: "#F0F2F5",
              padding: "3px",
              borderRadius: "4px",
              marginTop: "10px",
            }}
          >
            <Button
              sx={{
                width: "16px",
                backgroundColor: "white",
                color: "black",
                height: "95%",
                aspectRatio: "1/1",
              }}
              onClick={moveToCart}
            >
              +
            </Button>
            <Typography>{inCart.count}</Typography>
            <Button
              sx={{
                width: "16px",
                backgroundColor: "white",
                color: "black",
                height: "95%",
                aspectRatio: "1/1",
              }}
              onClick={handleDecrement}
            >
              -
            </Button>
          </Stack>
        ) : (
          <Button
            startIcon={<LocalMallIcon />}
            variant="contained"
            sx={{ width: "100%", padding: "4px", marginTop: "10px" }}
            onClick={moveToCart}
          >
            Ertaga
          </Button>
        )}
      </Box>
    </>
  );
};

export default Card;
