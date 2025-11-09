import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper container"
        style={{ borderRadius: "8px 8px 8px 8px" }}
      >
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/d245spj4eu2ublqhnm50/main_page_banner.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/d44pl1ej76ohd6dvn080/main_page_banner.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/d45hncmj76ohd6dvuffg/main_page_banner.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/d408qftv2sjj05orru0g/main_page_banner.jpg"
            alt=""
            style={{ objectFit: "cover", width: "100%" }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
