import {
  Box,
  Stack,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import useAppContext from "../hooks/useAppContext";
import CartCard from "../components/cartCard";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { cart } = useAppContext();
  const { t } = useTranslation();

  return (
    <main className="container">
      <h2 style={{ marginBlock: "30px 20px" }}>
        {t("hero.Tashkent")},
        <span style={{ color: "gray" }}>{cart.length} mahsulot</span>
      </h2>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Box
          sx={{
            border: "1px solid lightgray",
            borderRadius: "8px",
            padding: "16px 16px 0",
            width: "68%",
          }}
        >
          <Stack
            className="input-group"
            direction="row"
            spacing="10px"
            paddingBottom="  16px"
            sx={{ borderBottom: " 1px solid lightgray" }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Hammasini tanlash"
            />
          </Stack>

          <Stack>
            {cart.length ? (
              cart.map((p) => <CartCard key={p.id} {...p} />)
            ) : (
              <p>Mahsulot topilmadi</p>
            )}
          </Stack>
        </Box>

        <Box
          sx={{
            border: "1px solid lightgray",
            borderRadius: "8px",
            padding: "16px 16px 0",
            width: "31%",
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "16px" }}
          >
            Topshirish punktiga yetkazib berish $5
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", fontSize: "14px", color: "gray" }}
          >
            Yana $32 va $3 bo'ladi
          </Typography>
          <Box
            sx={{
              height: "5px",
              borderRadius: "11%",
              width: "100%",
              backgroundColor: "secondary.main",
              marginTop: "10px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                borderRadius: "5px",
                width: "60%",
                backgroundColor: "primary.main",
              }}
            ></Box>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-between"
            marginBlock="5px"
            paddingBottom="10px"
            sx={{ borderBottom: "1px solid lightgray" }}
          >
            <Typography sx={{ fontSize: "11px", color: "gray" }}>$7</Typography>
            <Typography sx={{ fontSize: "11px", color: "gray" }}>$5</Typography>
            <Typography sx={{ fontSize: "11px", color: "gray" }}>$3</Typography>
            <Typography sx={{ fontSize: "11px", color: "gray" }}>$0</Typography>
          </Stack>

          <Box>
            <Typography fontSize="16px" marginBlock="18px" fontWeight="550">
              Buyurtmangiz
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize="14px">
                Mahsulotlar ({cart.length}):
              </Typography>
              <Typography fontSize="14px">$totalPrice</Typography>
            </Stack>

            <Typography fontSize="16px" marginBlock="12px" fontWeight="550">
              Jami
            </Typography>

            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize="14px">Uzum karta bilan</Typography>
              <Typography>Price</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ marginTop: "20px" }}
            >
              <Typography fontSize="14px">Uzum kartasiz</Typography>
              <Typography>Price</Typography>
            </Stack>
          </Box>
          <Button
            variant="contained"
            sx={{
              padding: "10px 30px",
              width: "100%",
              fontSize: "16px",
              borderRadius: "10px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            Rasmiylashtirishga o'tish
          </Button>
        </Box>
      </Stack>
    </main>
  );
};

export default Cart;
