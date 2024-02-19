import { CgProfile } from 'react-icons/cg';
import { FaStar } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useState } from 'react';
import { TeacherDataProps } from '../../../types/TeacherDataProps';
import Header from '../Header';
import { truncate } from '../../../utils/truncate';

const TeacherData: TeacherDataProps[] = [
  {
    id: 1,
    profileImg: '/assets/Teacher/teacher1.svg',
    stars: 5.0,
    name: '김유리',
    major: '골프/수영',
    careerYear: 5,
    responseTime: 1,
  },
  {
    id: 2,
    profileImg: '/assets/Teacher/teacher2.svg',
    stars: 5.0,
    name: '이사부',
    major: '취업/창업',
    careerYear: 8,
    responseTime: 1,
  },
  {
    id: 3,
    profileImg: '/assets/Teacher/teacher3.svg',
    stars: 5.0,
    name: '김기강',
    major: '영상촬영/편집/일러스트',
    careerYear: 9,
    responseTime: 1,
  },
  {
    id: 4,
    profileImg: '/assets/Teacher/teacher4.svg',
    stars: 5.0,
    name: '신백호',
    major: '담보/분양권/상속',
    careerYear: 16,
    responseTime: 1,
  },
  {
    id: 5,
    profileImg: '/assets/Teacher/teacher1.svg',
    stars: 5.0,
    name: '김철수',
    major: '골프/수영',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 6,
    profileImg: '',
    stars: 5.0,
    name: '김철수',
    major: '골프/수영',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 7,
    profileImg: '/assets/Teacher/teacher3.svg',
    stars: 2.1,
    name: '이세돌',
    major: '골프/수영',
    careerYear: 2,
    responseTime: 1,
  },
];

const Teacher = () => {
  const [teacherData, setTeacherData] =
    useState<TeacherDataProps[]>(TeacherData);

  return (
    <div className="py-20 px-28">
      <Header partName="우리 동네 인기 선생님" />
      <hr className="w-full h-[2px] bg-black my-5" />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={4}
        slidesPerGroup={4}
        speed={1000}
      >
        <div>
          {teacherData?.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="w-[95%] h-[95%] rounded-sm overflow-hidden hover:scale-105 hover:ease-in-out transition-all cursor-pointer">
                <div className="flex items-center gap-2 py-2 pl-4 bg-gray-100 rounded-lg">
                  {d.profileImg ? (
                    <img
                      key={d.id}
                      src={d.profileImg}
                      alt={d.profileImg}
                      className="object-cover w-20 h-20 rounded-full "
                    />
                  ) : (
                    <CgProfile size={80} />
                  )}
                  <section className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-2">
                      <p className="text-lg font-semibold">{d.name}</p>
                      <span className="flex items-center">
                        <FaStar color="orange" size={19} />
                        <p className="font-medium">{d.stars.toFixed(1)}</p>
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">
                        {truncate(d.major, 9)}
                      </p>
                      <p className="text-gray-500">경력 {d.careerYear}년</p>
                    </div>
                    <div>
                      <p className="text-gray-400">
                        평균 {d.responseTime}일 내 응답
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Teacher;
