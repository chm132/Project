import React from 'react';
import HeartLessonCard from '../HeartLessonCard';
export const HeartLessons = [
  {
    lessonId: 1,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 2,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 3,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 4,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 5,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 6,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 7,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
  {
    lessonId: 8,
    img: '/assets/Education/edu1.png',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    endDate: '2024-02-13T12:57:11.266Z',
    startDate: '2024-02-13T10:00:11.266Z',
    endTime: '2024-02-13T12:00:11.266Z',
    startTime: '2024-02-13T12:00:11.266Z',
  },
];
const HeartLesson = () => {
  return (
    <div className="bg-gray-100 " style={{ height: '960px' }}>
      <section className="grid grid-cols-4 gap-8 py-12 px-36">
        {HeartLessons.map((lesson, index) => (
          <HeartLessonCard
            key={index}
            id={lesson.lessonId}
            img={lesson.img}
            title={lesson.title}
            endDate={lesson.endDate}
            startDate={lesson.startDate}
            endTime={lesson.endTime}
            startTime={lesson.startTime}
          />
        ))}
      </section>
    </div>
  );
};

export default HeartLesson;
