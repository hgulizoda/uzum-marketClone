import { Box, Stack, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";

const footer = () => {
  return (
    <footer className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "16px",
        }}
      >
        <Stack>
          <b>Biz haqimizda</b>
          <NavLink>Topshirish punktlari</NavLink>
          <NavLink>Vakansiyalar</NavLink>
        </Stack>
        <Stack>
          <b>Foydalanuvchilarga</b>
          <NavLink>Biz bilan bog'lanish</NavLink>
          <NavLink>Savol-javob</NavLink>
        </Stack>
        <Stack>
          <b>Tadbirkorlarga</b>
          <NavLink>Uzumda soting</NavLink>
          <NavLink>Sotuvchi kabinetiga kirish</NavLink>
          <NavLink>Topshirish punktini ochish</NavLink>
        </Stack>
        <Stack>
          <b>Ilovani yuklab oling</b>
          <Stack direction="row" spacing="10px" marginBottom="20px">
            <Button variant="outlined" color="black">
              App Store
            </Button>
            <Button variant="outlined" color="black">
              Google Play
            </Button>
          </Stack>
          <b>Ijtimoiy tarmoqlarda</b>
          <Stack direction="row">
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBlock: "16px",
          borderTop: "1px solid lightgray",
        }}
      >
        <Stack direction="row" spacing="20px">
          <NavLink
            style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}
          >
            Maxfiylik kelishuvi
          </NavLink>
          <NavLink
            style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}
          >
            Foydalanuvchi kelishuvi
          </NavLink>
        </Stack>

        <p style={{ fontSize: "11px", color: "gray" }}>
          «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
          himoyalangan»
        </p>
      </Box>
    </footer>
  );
};

export default footer;
