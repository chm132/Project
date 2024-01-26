import { CgProfile } from 'react-icons/cg';
import { FaRegStar } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { useState } from 'react';
import { TeacherDataProps } from '../../../types/TeacherDataProps';
import Header from '../Header';

const TeacherData: TeacherDataProps[] = [
  {
    id: 1,
    profileImg: '/assets/Teacher/teacher1.jpeg',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 2,
    profileImg: '/assets/Teacher/teacher2.jpeg',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 3,
    profileImg: '/assets/Teacher/teacher1.jpeg',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 4,
    profileImg: '/assets/Teacher/teacher1.jpeg',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 5,
    profileImg: '/assets/Teacher/teacher2.jpeg',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 6,
    profileImg: '',
    stars: 5.0,
    name: '김철수',
    major: '짱구/말리기',
    careerYear: 2,
    responseTime: 1,
  },
  {
    id: 7,
    profileImg: '/assets/Teacher/teacher2.jpeg',
    stars: 2.1,
    name: '이세돌',
    major: '바둑/말리기',
    careerYear: 2,
    responseTime: 1,
  },
];

const Teacher = () => {
  const [teacherData, setTeacherData] =
    useState<TeacherDataProps[]>(TeacherData);

  return (
    <div className="p-20">
      <Header partName="우리 동네 인기 선생님" />
      <hr className="w-full h-[2px] bg-black my-5" />
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={5}
        slidesPerGroup={4}
        speed={1000}
        slidesOffsetBefore={50}
        slidesOffsetAfter={50}
      >
        <div>
          {teacherData?.map((d) => (
            <SwiperSlide key={d.id}>
              <div className="w-[95%] h-[95%] rounded-sm overflow-hidden px-4 py-2 transition-all hover:scale-95 hover:rounded-md hover:border-slate-300 hover:border-[1px] hover:ease-in-out cursor-pointer">
                <section className="flex justify-between">
                  {d.profileImg ? (
                    <img
                      key={d.id}
                      src={d.profileImg}
                      alt={d.profileImg}
                      className="object-cover w-16 h-16 rounded-full "
                    />
                  ) : (
                    <CgProfile size={64} />
                  )}
                  <span className="flex items-start gap-[1px]">
                    <FaRegStar color="orange" size={28} />
                    <p className="text-lg font-bold">{d.stars.toFixed(1)}</p>
                  </span>
                </section>
                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-lg font-bold">{d.name}</p>
                  <p className="font-semibold">{d.major}</p>
                  <section className="flex items-center gap-5 ">
                    <p className="text-sm">경력 {d.careerYear}년</p>
                    <p className="text-sm">평균 {d.responseTime}일 내 응답</p>
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
