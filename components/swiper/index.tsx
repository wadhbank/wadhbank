import SwiperCore, { Pagination, Navigation } from "swiper";
import Wrapper from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const Index = (props) => {
  const { dataSource, renderItem, nextOnClick, prevOnClick, ...otherProps } =
    props;
  return (
    <Wrapper>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevOnClick.current;
          swiper.params.navigation.nextEl = nextOnClick.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        {...otherProps}
        className="mySwiper"
      >
        {dataSource?.map((item, index) => {
          return (
            <SwiperSlide key={index}>{renderItem(item, index)}</SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

export default Index;
