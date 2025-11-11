import {
  Box,
  CardMedia,
  Stack,
  Typography,
  ButtonGroup,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import uzumCard from "../assets/icons/uzumCard.svg";
import { useTranslation } from "react-i18next";
import useAppContext from "../hooks/useAppContext";
const CartCard = (product) => {
  const { t } = useTranslation();
  const { cart, setCart } = useAppContext();
  function handleCardIncerement() {
    const newData = cart.map((p) => {
      if (p.id === product.id) {
        return { ...p, count: p.count + 1 };
      } else return p;
    });
    setCart(newData);
  }

  function handleCardDecrement() {
    const newData = cart.map((p) => {
      if (p.id === product.id) {
        return { ...p, count: p.count - 1 };
      } else return p;
    });
    setCart(newData);
  }

  function deleteFromCart() {
    const newData = cart.filter((p) => p.id !== product.id);
    setCart(newData);
  }

  const handleChange = (event) => {
    const isChecked = event.target.checked;

    const newData = cart.map((p) =>
      p.id === product.id ? { ...p, checked: isChecked } : p
    );
    setCart(newData);
  };

  return (
    <Box sx={{ paddingBlock: "20px", borderBottom: "1px solid lightgray" }}>
      <Typography sx={{ fontSize: "12px", color: "gray" }}>
        {t("cart.deliveredByUzumMarket")}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}
      >
        {t("cart.tomorrowDelivery")}
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" width="70%">
          <FormControlLabel
            control={
              <Checkbox
                checked={product.checked || false}
                onChange={handleChange}
              />
            }
            label=""
          />
          <CardMedia
            component="img"
            image={product.thumbnail}
            height="120px"
            sx={{ width: "100px", backgroundColor: "secondary.main" }}
          />
          <Stack sx={{ width: "100%", marginLeft: "20px" }}>
            <Typography variant="paragraph">{product.title}</Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              marginTop="10px"
            >
              <Typography sx={{ fontSize: "14px" }}>
                <span style={{ color: "gray" }}>{t("cart.seller")}: </span>{" "}
                {product.brand}
              </Typography>
              <ButtonGroup
                variant="outlined"
                sx={{ border: "1px solid lightgray" }}
              >
                <IconButton
                  sx={{
                    borderRadius: "10%",
                    backgroundColor: "secondary.main",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={handleCardIncerement}
                >
                  +
                </IconButton>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {product.count}
                </div>
                <IconButton
                  sx={{
                    borderRadius: "10%",
                    backgroundColor: "secondary.main",
                    width: "40px",
                    height: "40px",
                  }}
                  onClick={
                    product.count > 1 ? handleCardDecrement : deleteFromCart
                  }
                >
                  -
                </IconButton>
              </ButtonGroup>
            </Stack>
          </Stack>
        </Stack>

        <Stack sx={{ textAlign: "right" }} alignItems="flex-end">
          <Button
            startIcon={<DeleteIcon />}
            variant="text"
            color="secondary.main"
            size="large"
            sx={{
              width: "101px",
              padding: "0",
              marginBottom: "20px",
            }}
            onClick={deleteFromCart}
          >
            {t("cart.remove")}
          </Button>
          <Typography color="primary.main" fontWeight="700" fontSize="20px">
            $
            {(
              (product.price * (100 - product.discountPercentage)) /
              100
            ).toFixed(2)}
            <img src={uzumCard} alt="" style={{ marginLeft: "10px" }} />
          </Typography>

          <Typography fontWeight="bold">
            {t("cart.withoutCard")}: ${product.price}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartCard;
