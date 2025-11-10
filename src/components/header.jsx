import { Stack, Button, ButtonGroup, IconButton, Box } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import uzbLogo from "../assets/icons/uzbLogo.png";
import uzumLogo from "../assets/icons/uzumLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useTranslation } from "react-i18next";
import useAppContext from "../hooks/useAppContext";
import { useEffect, useState } from "react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const { cart } = useAppContext();
  const navigate = useNavigate();
  const [direction, setDirection] = useState("");

  useEffect(() => {
    if (direction) {
      navigate(direction);
    }
  }, [direction, navigate]);
  function handleLangChange(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <header>
      <Stack
        sx={{ backgroundColor: "#F0F2F5", paddingBlock: "4px" }}
        className="header-top"
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="container header-top_container"
          width="100%"
        >
          <Stack
            direction="row"
            alignItems="center"
            className="header-top_left "
            spacing="24px"
          >
            <Button
              variant="text"
              startIcon={<LocationPinIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              color="black"
              sx={{
                fontFamily: "Inter",
                textTransform: "none",
                fontSize: "14px",
              }}
            >
              {t("header.location")}
            </Button>
            <Button
              variant="text"
              color="black"
              sx={{
                fontFamily: "Inter",
                textTransform: "none",
                fontSize: "14px",
              }}
            >
              {t("header.pickupPoints")}
            </Button>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            className="header-top_right"
            spacing="10px"
          >
            <ButtonGroup
              variant="text"
              color="primary"
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                  borderRight: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "1.5px",
                    height: "50%",
                    backgroundColor: "gray",
                    opacity: "40%",
                    borderRadius: "1px",
                  },
                },
              }}
            >
              <Button>{t("header.becomeSeller")}</Button>
              <Button>{t("header.openPickupPoint")}</Button>
            </ButtonGroup>
            <Button variant="text" color="black">
              {t("header.faq")}
            </Button>
            <Button variant="text" color="black">
              {t("header.orders")}
            </Button>
            <select onChange={handleLangChange}>
              <option value="uz">O'zbek</option>
              <option value="en">English</option>
            </select>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        className="header-bottom container"
        direction="row"
        alignItems="center"
        width="100%"
        spacing="30px"
        paddingBlock="17px"
        justifyContent="space-between"
      >
        <img
          src={uzumLogo}
          alt="Uzum logo"
          width="20%"
          height="32px"
          onClick={() => setDirection("/")}
        />
        <Stack direction="row" width="50%" spacing="12px">
          <Button
            variant="contained"
            sx={{ color: "primary" }}
            startIcon={<HorizontalSplitIcon />}
          >
            {t("header.catalog")}
          </Button>
          <Stack
            className="header-search_input"
            direction="row"
            sx={{
              border: "1px solid #a2a5a880",
              justifyContent: "space-between",
              borderRadius: "4px",
              width: "80%",
            }}
          >
            <input
              type="text"
              placeholder={t("header.searchPlaceholder")}
              style={{
                outline: "none",
                border: "none",
                paddingLeft: "16px",
                width: "80%",
              }}
            />
            <IconButton
              color="black"
              sx={{
                padding: "8px 32px",
                backgroundColor: "#EDEFF2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 0,
              }}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Button
            variant="text"
            startIcon={<PersonOutlineIcon />}
            color="black"
            size="large"
          >
            {t("header.login")}
          </Button>
          <Button
            variant="text"
            startIcon={<FavoriteBorderIcon />}
            color="black"
            size="large"
          >
            {t("header.favorites")}
          </Button>
          <Button
            variant="text"
            startIcon={<LocalMallIcon />}
            color="black"
            size="large"
            onClick={() => setDirection("/cart")}
          >
            {t("header.cart")}
            <Box
              backgroundColor="primary.main"
              color="white"
              sx={{
                paddingInline: "7px",
                marginLeft: "5px",
                borderRadius: "10%",
                height: "70%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              {cart.length}
            </Box>
          </Button>
        </Stack>
      </Stack>

      <nav
        className="container header-bottom_nav"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "12px",
        }}
      >
        <NavLink className="bold">
          <img
            src="https://static.uzum.uz/fast_categories/Topsales.png"
            alt=""
          />
          {t("header.weekProducts")}
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/feshn3110.png" alt="" />
          {t("header.winterCollection")}
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/hobbi2110.png" alt="" />
          {t("header.hobbyAndCreativity")}
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/smart2010.png" alt="" />
          {t("header.smartphones")}
        </NavLink>
        <NavLink>{t("header.tourism")}</NavLink>
        <NavLink>{t("header.electronics")}</NavLink>
        <NavLink>{t("header.homeAppliances")}</NavLink>
        <NavLink>{t("header.clothing")}</NavLink>
        <NavLink>{t("header.shoes")}</NavLink>
        <NavLink>{t("header.accessories")}</NavLink>
        <NavLink>{t("header.more")}</NavLink>
      </nav>
    </header>
  );
};

export default Header;
