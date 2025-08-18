import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { name: 'Beverages', image: 'https://googro.co.za/cdn/shop/files/Soft_Drinks.png?v=1710322462&width=832' },
  { name: 'Baby Care', image: 'https://googro.co.za/cdn/shop/files/Baby_dd2c9975-a500-48b0-a9ed-0b6035e8d89f.png?v=1710322462&width=832' },
  { name: 'Home Care', image: 'https://googro.co.za/cdn/shop/files/Home_Care.png?v=1710322462&width=832' },
  { name: 'Pet Food', image: 'https://googro.co.za/cdn/shop/files/Pets.png?v=1710322462&width=832' },
  { name: 'Tea, Coffee & Hot Drinks', image: 'https://googro.co.za/cdn/shop/files/Coffe_Tea_Hot_Chocolate.png?v=1710322462&width=832' },
  { name: 'Snacks & Treats', image: 'https://googro.co.za/cdn/shop/files/Chips.png?v=1710322462&width=832' },
  { name: 'Alcohol Beverages', image: 'https://googro.co.za/cdn/shop/files/freepik_br_b6fa92df-2f24-410a-90ae-da208f1b55b5.png?v=1733742942&width=832' },
  { name: 'Chocolates & Sweets', image: 'https://googro.co.za/cdn/shop/files/Chocolates.png?v=1710322462&width=832' },
];

const HomeCat = () => {
  return (
    <div className="home-categories-section">
      <div className="section-header">
        <p className="subheading">Basket Savings</p>
        <h2 className="main-heading">Popular Categories</h2>
      </div>

      <div className="categories-slider-container">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              {/* Using the Link component from react-router-dom */}
              <Link to={`/shop/${category.name.replace(/ /g, '-').toLowerCase()}`} className="category-link">
                <div className="category-item">
                  <img src={category.image} alt={category.name} className="category-image" />
                  <h6 className="category-name">{category.name}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCat;