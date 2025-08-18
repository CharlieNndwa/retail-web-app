import { Swiper, SwiperSlide } from "swiper/react";
import ProductItem from "../../../Components/ProductItem";
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import React from "react";

const RelatedProducts = (props) => {
  return (
    <>
      <div className="d-flex align-items-center mt-4">
        <div className="info w-75">
          <h3 className="mb-0 hd ">{props.title}</h3>
        </div>
      </div>

      <div className="product_row w-100 mt-2">
        <Swiper
          slidesPerView={5}
          spaceBetween={24}
          navigation={true}
          slidesPerGroup={3}
          modules={[Navigation, Autoplay]} // Add Autoplay here as well
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
          <SwiperSlide>
            <ProductItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default RelatedProducts;
