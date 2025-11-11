import { Box, Stack, Button, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
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
          <b>{t("footer.aboutUs")}</b>
          <NavLink>{t("footer.deliveryPoints")}</NavLink>
          <NavLink>{t("footer.vacancies")}</NavLink>
        </Stack>
        <Stack>
          <b>{t("footer.forUsers")}</b>
          <NavLink>{t("footer.contactUs")}</NavLink>
          <NavLink>{t("footer.faq")}</NavLink>
        </Stack>
        <Stack>
          <b>{t("footer.forEntrepreneurs")}</b>
          <NavLink>{t("footer.sellOnUzum")}</NavLink>
          <NavLink>{t("footer.sellerCabinet")}</NavLink>
          <NavLink>{t("footer.openDeliveryPoint")}</NavLink>
        </Stack>
        <Stack>
          <b>{t("footer.downloadApp")}</b>
          <Stack direction="row" spacing="10px" marginBottom="20px">
            <Button variant="outlined" color="black">
              App Store
            </Button>
            <Button variant="outlined" color="black">
              Google Play
            </Button>
          </Stack>
          <b>{t("footer.socialNetworks")}</b>
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
            {t("footer.privacyPolicy")}
          </NavLink>
          <NavLink
            style={{ fontSize: "14px", color: "black", fontWeight: "bold" }}
          >
            {t("footer.userAgreement")}
          </NavLink>
        </Stack>

        <p style={{ fontSize: "11px", color: "gray" }}>
          {t("footer.copyright")}
        </p>
      </Box>
    </footer>
  );
};

export default Footer;
