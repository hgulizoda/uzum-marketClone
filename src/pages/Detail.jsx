import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Stack,
  CircularProgress,
  CardMedia,
  Rating,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const DetailPage = () => {
  const { cardId } = useParams();
  const [detailCard, setDetailCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/${cardId}`)
      .then((res) => {
        setDetailCard(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setLoading(false);
      });
  }, [cardId]);

  console.log(cardId);

  return (
    <Box>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box
          className="container"
          sx={{
            marginBlock: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box width="70%">
            <Typography variant="h4">{detailCard.title}</Typography>

            <Stack
              direction="row"
              spacing="10px"
              sx={{ marginBlock: "5px 20px" }}
            >
              <Rating
                name="half-rating-read"
                defaultValue={detailCard.rating}
                precision={0.5}
                readOnly
              />
              <p>{detailCard.rating}</p>
              <p>({detailCard.reviews.length} sharh)</p>
            </Stack>
            <Stack direction="row" spacing="10px" sx={{ marginBottom: "20px" }}>
              <img
                src={detailCard.thumbnail}
                alt=""
                width="50%"
                style={{ backgroundColor: "#F0F2F5", borderRadius: "8px" }}
              />
              <img
                src={detailCard.thumbnail}
                alt=""
                width="50%"
                style={{ backgroundColor: "#F0F2F5", borderRadius: "8px" }}
              />
            </Stack>
            <p>{detailCard.description}</p>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ marginTop: "30px" }}
            >
              {detailCard.reviews.map((r) => (
                <Box
                  width="33%"
                  key={r.reviewerName}
                  sx={{
                    padding: "10px 20px 20px",
                    border: "1px solid lightgray",
                    borderRadius: "4px",
                  }}
                >
                  <Stack direction="row" justifyContent="space-between">
                    <b>{r.reviewerName}</b>
                    <Rating
                      name="half-rating-read"
                      defaultValue={r.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                  </Stack>

                  <p style={{ marginTop: "20px" }}>
                    <b>Izoh:</b> {r.comment}
                  </p>
                </Box>
              ))}
            </Stack>
          </Box>
          <Box
            width="27%"
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "8px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  backgroundColor: "#7F4DFF",
                  color: "white",
                  borderRadius: "20px",
                  padding: "0 10px",
                  fontSize: "12px",
                }}
              >
                -5% Uzum karta bilan
              </p>

              <p
                style={{
                  color: "#7F4DFF",
                  fontSize: "32px",
                  fontWeight: "600",
                }}
              >
                $
                {(
                  (detailCard.price * (100 - detailCard.discountPercentage)) /
                  100
                ).toFixed(2)}
              </p>
              <p>Uzum kartasiz ${detailCard.price}</p>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing="10px"
                marginTop="20px"
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "gray",
                    boxShadow: "none",
                    padding: "10px 40px",
                    borderRadius: "8px",
                    fontSize: "16px",
                  }}
                >
                  1 klikda xarid qilish
                </Button>
                <IconButton
                  sx={{
                    color: "gray",
                    borderRadius: "8px",
                    backgroundColor: "secondary.main",
                    padding: "13px",
                    height: "100%",
                  }}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Stack>
            </Box>

            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "8px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <b>Ertage yetkazib beramiz</b>
              <p style={{ fontSize: "14px" }}>
                Uzum topshirish punktiga yoki uyga
              </p>
            </Box>

            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "8px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <b>Qulay usulda xavfsiz to'lov</b>
              <p
                style={{
                  paddingBottom: "10px",
                  borderBottom: "1px solid lightgray",
                  fontSize: "14px",
                }}
              >
                Karta orqali, naqd pulda yoki boʻlib toʻlang
              </p>
              <b style={{ marginTop: "10px" }}>Qaytarish oson va tez</b>
              <p style={{ fontSize: "14px" }}>
                Tovarlarni 10 kun ichida qabul qilamiz va darhol pulini
                qaytaramiz. Batafsil
              </p>
            </Box>

            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "8px",
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",
                alignItems: "start",
              }}
            >
              <h3>{detailCard.brand}</h3>
              <Stack direction="row" spacing="10px" alignItems="center">
                <Rating
                  name="half-rating-read"
                  defaultValue={detailCard.rating}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <p>{detailCard.reviews.length} ta baho</p>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F0F2F5",
                  boxShadow: "none",
                  width: "100%",
                  paddingBlock: "10px",
                  color: "black",
                  borderRadius: "8px",
                  fontSize: "16px",
                  marginTop: "16px",
                }}
              >
                Do'konga o'tish
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailPage;
