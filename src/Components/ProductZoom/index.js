import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";
import { useRef, useState } from "react";



const ProductZoom = () => {
     const [slideIndex, setSlideIndex] = useState(0);
      const zoomSliderBig = useRef();
      const zoomSlider = useRef();


      const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
      };
    




    return (
        <div className="productZoom">
              <div className="productZoom position-relative">
              <div className="badge badge-primary">28%</div>
              <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={false}
                slidesPerGroup={1}
                modules={[Navigation]}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://googro.co.za/cdn/shop/files/mqaCO4gc-LLBH0ymrfoe2YcDl0P0ak0C2qd4Iv502mM.jpg?v=1704628909&width=375`}
                    />
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://media.takealot.com/covers_images/ec242e5640ab428587637cafd641328e/s-pdpxl.file`}
                    />
                  </div>
                </SwiperSlide>
                
                <SwiperSlide>
                  <div className="item">
                    <InnerImageZoom
                      zoomType="hover"
                      zoomScale={1}
                      src={`https://cdn-prd-02.pnp.co.za/sys-master/images/hf2/h60/11451383447582/silo-product-image-v2-19Jul2024-180112-8711000509388-Angle_A-234632-3284_515Wx515H`}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <Swiper
              slidesPerView={4}
              spaceBetween={0}
              navigation={true}
              slidesPerGroup={1}
              modules={[Navigation]}
              className="zoomSlider"
              ref={zoomSlider}
            >
              <SwiperSlide>
                <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                  <img
                    src={`https://googro.co.za/cdn/shop/files/mqaCO4gc-LLBH0ymrfoe2YcDl0P0ak0C2qd4Iv502mM.jpg?v=1704628909&width=375`}
                    className="w-100"
                    onClick={() => goto(0)}
                    alt=''
                  />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                  <img
                    src={`https://media.takealot.com/covers_images/ec242e5640ab428587637cafd641328e/s-pdpxl.file`}
                    className="w-100"
                    onClick={() => goto(1)}
                    alt=''
                  />
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                  <img
                    src={`https://cdn-prd-02.pnp.co.za/sys-master/images/hf2/h60/11451383447582/silo-product-image-v2-19Jul2024-180112-8711000509388-Angle_A-234632-3284_515Wx515H`}
                    className="w-100"
                    onClick={() => goto(2)}
                    alt=''
                  />
                </div>
              </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductZoom