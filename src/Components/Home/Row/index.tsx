import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';
import { EducationDataProps } from '../../../types/EducationDataProps';
import Header from '../Header';

const PopularEducationData = [
  {
    id: 1,
    img: '/assets/Education/edu2.png',
    title: '스마트폰',
    userNum: 13000,
  },
  {
    id: 2,
    img: '/assets/Education/edu2.png',
    title: '키오스크',
    userNum: 2000,
  },
  {
    id: 3,
    img: '/assets/Education/edu2.png',
    title: '야구',
    userNum: 1300,
  },
  {
    id: 4,
    img: '/assets/Education/edu2.png',
    title: '요가',
    userNum: 34000,
  },
  {
    id: 5,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 6,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 7,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 8,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 9,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    userNum: 4300,
  },
];

const RecentEducationData = [
  {
    id: 1,
    img: '/assets/Education/edu2.png',
    title: '스마트폰',
    place: '포켓몬센터',
  },
  {
    id: 2,
    img: '/assets/Education/edu2.png',
    title: '키오스크',
    place: '디지몬센터',
  },
  {
    id: 3,
    img: '/assets/Education/edu2.png',
    title: '야구',
    place: '아이돌 중 센터',
  },
  {
    id: 4,
    img: '/assets/Education/edu2.png',
    title: '요가',
    place: '짱구센터',
  },
  {
    id: 5,
    img: '/assets/Education/edu2.png',
    title: '바둑',
    place: '이세돌 바둑센터',
  },
];

interface RowProps {
  title: string;
  data: string;
}

const Row = ({ title, data }: RowProps) => {
  const [dummydata, setDummyData] = useState<EducationDataProps[]>([]);

  useEffect(() => {
    if (data === 'popular') {
      setDummyData(PopularEducationData);
    } else {
      setDummyData(RecentEducationData);
    }
  }, []);

  return (
    <div>
      <div className="p-20">
        <Header partName={title} />
        <hr className="w-full h-[2px] bg-black my-5" />
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={2}
          slidesPerView={4}
          slidesPerGroup={4}
          speed={1000}
          slidesOffsetBefore={50}
          slidesOffsetAfter={50}
        >
          <div>
            {dummydata?.map((d) => (
              <SwiperSlide key={d.id}>
                <div className="w-[95%] h-[95%] rounded-sm overflow-hidden px-4 py-2 transition-all hover:scale-95 hover:rounded-md hover:border-slate-300 hover:border-[1px] hover:ease-in-out cursor-pointer">
                  <img
                    key={d.id}
                    src={d.img}
                    alt={d.img}
                    className="block object-cover w-full h-[50%] "
                  />
                  <div>
                    <p>{d.title} 사용법</p>
                    {data === 'popular' ? (
                      <p>{d.userNum}명 신청중!</p>
                    ) : (
                      <p>{d.place}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Row;
