import { Swiper, SwiperSlide } from 'swiper/react';
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerImage = [
  {
    id: 1,
    img: '/assets/Banner/banner.webp',
  },
  {
    id: 2,
    img: '/assets/Banner/banner.webp',
  },
  {
    id: 3,
    img: '/assets/Banner/banner.webp',
  },
  {
    id: 4,
    img: '/assets/Banner/banner.webp',
  },
  {
    id: 5,
    img: '/assets/Banner/banner.webp',
  },
];

const Banner = () => {
  return (
    <div className="w-full h-96">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <div>
          {BannerImage.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="w-[95%] h-80 rounded-sm overflow-hidden">
                <img
                  key={d.id}
                  src={d.img}
                  alt={d.img}
                  className="absolute inset-0 z-10 block object-cover w-full h-80"
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
