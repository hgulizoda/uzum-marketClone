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
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

const Cart = () => {
  const { cart, setCart } = useAppContext();
  const { t } = useTranslation();

  function handleSelectAll(e) {
    if (!e.target.checked) {
      const newData = cart.map((p) => ({ ...p, checked: false }));
      setCart(newData);
    } else {
      const newData = cart.map((p) => ({ ...p, checked: true }));
      setCart(newData);
    }
  }

  let totalPrice = useMemo(() => {
    const newData = cart.filter((p) => p.checked);
    return newData.reduce((sum, cur) => {
      return sum + cur.price * cur.count;
    }, 0);
  }, [cart]);

  let totalPriceWithUzumCard = useMemo(() => {
    const newData = cart.filter((p) => p.checked);
    return newData.reduce((sum, cur) => {
      return (
        sum + (cur.price * (100 - cur.discountPercentage) * cur.count) / 100
      );
    }, 0);
  }, [cart]);

  return (
    <main className="container" style={{ minHeight: "28vh" }}>
      {cart.length ? (
        <>
          <h2 style={{ marginBlock: "30px 20px", display: "flex", gap: "3px" }}>
            {t("cart.yourcart")},
            <span style={{ color: "gray" }}>
              {cart.length} {t("cart.products")}
            </span>
          </h2>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
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
                  onChange={handleSelectAll}
                  control={
                    <Checkbox
                      checked={cart.length && cart.every((p) => p.checked)}
                    />
                  }
                  label={t("cart.selectAll")}
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
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {t("cart.deliveringToPickUps")}{" "}
                {totalPriceWithUzumCard < 50
                  ? "$7"
                  : totalPriceWithUzumCard < 100
                  ? "$5"
                  : totalPriceWithUzumCard < 150
                  ? "$3"
                  : "$0"}
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
                    width: `${
                      totalPriceWithUzumCard < 150
                        ? (totalPriceWithUzumCard * 100) / 150
                        : 100
                    }%`,

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
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  $7
                </Typography>
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  $5
                </Typography>
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  $3
                </Typography>
                <Typography sx={{ fontSize: "11px", color: "gray" }}>
                  $0
                </Typography>
              </Stack>

              <Box>
                <Typography fontSize="16px" marginBlock="18px" fontWeight="550">
                  {t("cart.yourOrder")}
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize="14px">
                    {t("cart.products")} ({cart.length}):
                  </Typography>
                  <Typography fontSize="14px">
                    ${totalPrice.toFixed(2)}
                  </Typography>
                </Stack>

                <Typography fontSize="16px" marginBlock="12px" fontWeight="550">
                  {t("cart.total")}
                </Typography>

                <Stack direction="row" justifyContent="space-between">
                  <Typography fontSize="14px">{t("cart.widthCard")}</Typography>
                  <Stack>
                    <Typography
                      sx={{
                        textAlign: "right",
                        color: "primary.main",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      ${totalPriceWithUzumCard.toFixed(2)}
                    </Typography>
                    <Typography
                      color="#0ebb48ff"
                      fontSize="14px"
                      fontWeight="bold"
                    >
                      {t("cart.savings")}: $
                      {(totalPrice - totalPriceWithUzumCard).toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginTop: "20px" }}
                >
                  <Typography fontSize="14px">
                    {t("cart.withoutCard")}
                  </Typography>
                  <Typography fontWeight="bold">
                    ${totalPrice.toFixed(2)}
                  </Typography>
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
                {t("cart.checkout")}
              </Button>
            </Box>
          </Stack>
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <img
            src="https://uzum.uz/static/img/shopocat.490a4a1.png"
            alt=""
            style={{ width: "150px" }}
          />
          <p style={{ fontWeight: "bold" }}>{t("cart.notFound")}</p>
          <p style={{ fontSize: "12px", color: "gray", marginTop: "10px" }}>
            {t("cart.startFromHome")}
          </p>
        </Box>
      )}
    </main>
  );
};

export default Cart;
