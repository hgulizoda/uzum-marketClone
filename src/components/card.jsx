import {
  CardMedia,
  Box,
  Typography,
  Stack,
  Button,
  CardContent,
} from "@mui/material";
import uzumCard from "../assets/icons/uzumCard.svg";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import useAppContext from "../hooks/useAppContext";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ onClick, ...rest }) => {
  const { setCart, cart } = useAppContext();
  const { t } = useTranslation();
  const inCart = cart.find((p) => p.id === rest.id);
  const navigate = useNavigate();

  function moveToCart(e) {
    e.stopPropagation();
    if (inCart) {
      const newData = cart.map((p) => {
        if (p.id === rest.id) {
          return { ...p, count: p.count + 1 };
        } else {
          return p;
        }
      });
      setCart(newData);
    } else {
      setCart([...cart, { ...rest, count: 1 }]);
    }
  }

  function handleDecrement(e) {
    e.stopPropagation();
    if (inCart.count === 1) {
      const NewData = cart.filter((p) => p.id !== rest.id);
      setCart(NewData);
    } else {
      if (inCart) {
        const newData = cart.map((p) => {
          if (p.id === rest.id) {
            return { ...p, count: p.count - 1 };
          } else {
            return p;
          }
        });
        setCart(newData);
      } else {
        setCart([...cart, { ...rest, count: 1 }]);
      }
    }
  }

  return (
    <>
      <Box onClick={onClick}>
        <Link to={`/home/${rest.id}`} style={{ textDecoration: "none" }}>
          <CardMedia
            component="img"
            height="309px"
            image={rest.thumbnail}
            sx={{ backgroundColor: "#F0F2F5", borderRadius: "8px" }}
          ></CardMedia>
        </Link>
        <CardContent sx={{ padding: "0", alignItems: "start" }}>
          <Typography
            color="primary"
            sx={{
              alignItems: "center",
              display: "flex",
              gap: "5px",
              fontWeight: "600",
            }}
          >
            ${(rest.price * (1 - rest.discountPercentage / 100)).toFixed(2)}{" "}
            <img src={uzumCard} alt="" />
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "gray" }}>
            ${rest.price}
          </Typography>

          <Typography
            sx={{
              backgroundColor: "yellow",
              fontSize: "11px",
              padding: "1px 4px",
              justifySelf: "left",
            }}
          >
            ${(rest.price / 12).toFixed(2)} {t("common.monthly")}
          </Typography>

          <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
            {rest.title}
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
              {t("common.tomorrow")}
            </Button>
          )}
        </CardContent>
      </Box>
    </>
  );
};

export default Card;
