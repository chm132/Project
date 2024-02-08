import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { useEffect, useState } from 'react';
import { EducationDataProps } from '../../../types/EducationDataProps';
import Header from '../Header';
import { truncate } from '../../../utils/truncate';

const PopularEducationData = [
  {
    id: 1,
    img: '/assets/Education/edu1.png',
    title: '왕초보를 위한 스마트폰 활용 꿀팁',
    userNum: 38,
  },
  {
    id: 2,
    img: '/assets/Education/edu2.png',
    title: '카카오톡, 생활에 유용한 앱 활용',
    userNum: 24,
  },
  {
    id: 3,
    img: '/assets/Education/edu3.png',
    title: '재미있고 유익한 부동산 상식',
    userNum: 17,
  },
  {
    id: 4,
    img: '/assets/Education/edu4.png',
    title: '중장년 재취업을 위한 새로운 가능성과 성공 전략',
    userNum: 9,
  },
  {
    id: 5,
    img: '/assets/Education/edu5.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 6,
    img: '/assets/Education/edu6.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 7,
    img: '/assets/Education/edu7.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 8,
    img: '/assets/Education/edu8.png',
    title: '바둑',
    userNum: 4300,
  },
  {
    id: 9,
    img: '/assets/Education/edu1.png',
    title: '바둑',
    userNum: 4300,
  },
];

const RecentEducationData = [
  {
    id: 1,
    img: '/assets/Education/edu8.png',
    title: '재철재료를 사용한 즐거운 남자들의 요리교실',
    place: '서부50플러스센터',
  },
  {
    id: 2,
    img: '/assets/Education/edu7.png',
    title: '재미있고 유익한 부동산 상식',
    place: '금천50플러스센터',
  },
  {
    id: 3,
    img: '/assets/Education/edu6.png',
    title:
      '삶을 변화시키는 성북하루공부(알기 쉬운 국제상식(모든 국세는 홈택스로 통한다))',
    place: '실시간 온라인(유튜브)',
  },
  {
    id: 4,
    img: '/assets/Education/edu5.png',
    title: '누구나 쉽게 귀에 쏙쏙 컴퓨터 왕기초',
    place: '노원50플러스센터',
  },
  {
    id: 5,
    img: '/assets/Education/edu4.png',
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
    <div className="py-10 px-28">
      <Header partName={title} />
      <hr className="w-full h-[2px] bg-black mt-2" />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={4}
        slidesPerGroup={4}
        speed={1000}
      >
        <div>
          {dummydata?.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="w-[95%] h-[95%] rounded-sm overflow-hidden transition-all cursor-pointer">
                <img
                  key={d.id}
                  src={d.img}
                  alt={d.img}
                  className="object-cover w-full h-40 mt-10 rounded-lg"
                />
                <div className="font-medium">
                  <p className="text-lg hover:underline hover:decoration-4 w-fit">
                    {truncate(d.title, 20)}
                  </p>
                  {data === 'popular' ? (
                    <p className="text-gray-400">{d.userNum}명 신청중!</p>
                  ) : (
                    <p className="text-gray-400">{d.place}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Row;
