import { Stack, Button, ButtonGroup, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
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

const Header = () => {
  const { t, i18n } = useTranslation();
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
              {t("Tashkent")}
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
              Topshirish punktlari
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
              <Button>Sotuvchi bo'lish</Button>
              <Button>Topshirish punktini ochish</Button>
            </ButtonGroup>
            <Button variant="text" color="black">
              Savol-javob
            </Button>
            <Button variant="text" color="black">
              Buyurtmalarim
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
        <img src={uzumLogo} alt="Uzum logo" width="20%" height="32px" />
        <Stack direction="row" width="50%" spacing="12px">
          <Button
            variant="contained"
            sx={{ color: "primary" }}
            startIcon={<HorizontalSplitIcon />}
          >
            Katalog
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
              placeholder="Mahsulotlar va turkumlar izlash"
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
            Kirish
          </Button>
          <Button
            variant="text"
            startIcon={<FavoriteBorderIcon />}
            color="black"
            size="large"
          >
            Saralangan
          </Button>
          <Button
            variant="text"
            startIcon={<LocalMallIcon />}
            color="black"
            size="large"
          >
            Savat
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
          Hafta tovarlari
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/feshn3110.png" alt="" />
          Qishki kolleksiya
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/hobbi2110.png" alt="" />
          Hobbi va ijod
        </NavLink>
        <NavLink className="bold">
          <img src="https://static.uzum.uz/baner/smart2010.png" alt="" />
          Smartfonlari
        </NavLink>
        <NavLink>Turizm, baliq ovi va ovchilik</NavLink>
        <NavLink>Elektronika</NavLink>
        <NavLink>Maishiy texnika</NavLink>
        <NavLink>Kiyim</NavLink>
        <NavLink>Poyabzallar</NavLink>
        <NavLink>Aksessuarlar</NavLink>
        <NavLink>Yana</NavLink>
      </nav>
    </header>
  );
};

export default Header;
