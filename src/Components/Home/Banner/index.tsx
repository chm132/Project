import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import 'swiper/css';
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
    <div className="py-5 bg-gray-100">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{ clickable: true }}
        style={{ marginRight: '100px', borderRadius: '20px' }}
      >
        {BannerImage.map((d) => (
          <SwiperSlide key={d.id} className="overflow-hidden">
            <img
              key={d.id}
              src={d.img}
              alt={d.img}
              className="object-fill rounded-[20px] ml-28 h-[400px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
