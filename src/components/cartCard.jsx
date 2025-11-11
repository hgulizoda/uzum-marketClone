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
const CartCard = (product) => {
  const { t } = useTranslation();
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
        <Stack direction="row" spacing="20px">
          <FormControlLabel control={<Checkbox defaultChecked />} label="" />
          <CardMedia
            component="img"
            image={product.thumbnail}
            height="120px"
            sx={{ width: "100px", backgroundColor: "secondary.main" }}
          />
          <Stack>
            <Typography variant="paragraph">{product.title}</Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing="150px"
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
