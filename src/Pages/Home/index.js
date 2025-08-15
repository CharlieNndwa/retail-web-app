import HomeBanner from "../../Components/HomeBanner";
import Meat from "../../assets/images/meeat.jpg";

import banner from "../../assets/images/banner2.jpg";
import Banner4 from "../../assets/images/banner4.jpg";
import Banner3 from "../../assets/images/banner3.jpg";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import autoplay CSS
import { Navigation, Autoplay } from "swiper/modules"; // Import Autoplay module
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";


const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCat />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={Meat} className="cursor w-100" alt="Meat banner" />
                </div>
                <div className="banner mt-4">
                  <img
                    src={banner}
                    className="cursor w-100"
                    alt="Meat banner"
                  />
                </div>
              </div>
            </div>

            <div className="col-md-9 productRow">
              
              
              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of September.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View all <IoIosArrowRoundForward />
                </Button>
              </div>

              <div className="product_row w-100 mt-2">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={24}
                  navigation={true}
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

              <div className="d-flex align-items-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View all <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="product_row w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={24}
                  navigation={true}
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
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner ">
                  <img src={Banner3} className="cursor w-100" alt="Banner 1" />
                </div>

                <div className="banner ">
                  <img src={Banner4} className="cursor w-100" alt="Banner 1" />
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>


      


    </>
  );
};

export default Home;
