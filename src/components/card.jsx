import { CardMedia, Box, Typography, Stack, Button } from "@mui/material";
import uzumCard from "../assets/icons/uzumCard.svg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import useAppContext from "../hooks/useAppContext";

const Card = (product) => {
  const inCart = false;

  const { setCart, cart } = useAppContext();
  function moveToCart() {
    setCart(product);
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
            >
              +
            </Button>
            <Typography>1</Typography>
            <Button
              sx={{
                width: "16px",
                backgroundColor: "white",
                color: "black",
                height: "95%",
                aspectRatio: "1/1",
              }}
            >
              -
            </Button>
          </Stack>
        ) : (
          <Button
            startIcon={<LocalMallIcon />}
            variant="contained"
            sx={{ width: "100%", padding: "4px", marginTop: "10px" }}
          >
            Ertaga
          </Button>
        )}
      </Box>
    </>
  );
};

export default Card;
