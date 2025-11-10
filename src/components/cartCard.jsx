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
const CartCard = (product) => {
  return (
    <Box sx={{ paddingBlock: "20px", borderBottom: "1px solid lightgray" }}>
      <Stack>
        <Typography sx={{ fontSize: "12px", color: "gray" }}>
          Uzum market yetkazib berishi
        </Typography>
        <Typography
          variant="h3"
          sx={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px" }}
        >
          Ertaga yetkazib beramiz
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <FormControlLabel control={<Checkbox defaultChecked />} label="" />
        <CardMedia
          component="img"
          image={product.thumbnail}
          height="120px"
          sx={{ width: "100px", backgroundColor: "secondary.main" }}
        />
        <Stack width="60%">
          <Typography variant="paragraph">{product.title}</Typography>
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ fontSize: "14px", marginTop: "10px" }}>
              <span style={{ color: "gray" }}>Sotuvchi: </span> {product.brand}
            </Typography>
            <ButtonGroup>
              <IconButton sx={{ borderRadius: "10%" }}>+</IconButton>
              <IconButton>{product.count}</IconButton>
              <IconButton>-</IconButton>
            </ButtonGroup>
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
            Yo'q qilish
          </Button>
          <Typography color="primary.main" fontWeight="700" fontSize="20px">
            $
            {(
              (product.price * (100 - product.discountPercentage)) /
              100
            ).toFixed(2)}
            <img src={uzumCard} alt="" style={{ marginLeft: "10px" }} />
          </Typography>

          <Typography>Uzum kartasiz ${product.price}</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartCard;
