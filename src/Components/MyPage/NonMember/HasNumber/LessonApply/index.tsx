import { useEffect } from 'react';
import Lesson from '../../../Lesson';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import { useGetLessonsMutation } from '../../../../../redux/apis/guestApi';

export const Lessons = [
  {
    lessonId: 1,
    category: 'smartPhone',
    status: 'waiting',
    applyCreatedAt: '2024-02-13T12:57:11.266Z',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    place: '공릉 1동 행정복지센터',
    lessonStartDate: '2024-02-13T12:57:11.266Z',
    lessonStartTime: '2024-02-13T10:00:11.266Z',
    lessonEndTime: '2024-02-13T12:00:11.266Z',
    teacher: '친절한 쩡이쌤',
  },
  {
    lessonId: 2,
    category: 'smartPhone',
    status: 'completed',
    applyCreatedAt: '2024-02-13T12:57:11.266Z',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    place: '공릉 1동 행정복지센터',
    lessonStartDate: '2024-02-13T12:57:11.266Z',
    lessonStartTime: '2024-02-13T10:00:11.266Z',
    lessonEndTime: '2024-02-13T12:00:11.266Z',
    teacher: '친절한 쩡이쌤',
  },
  {
    lessonId: 3,
    category: 'smartPhone',
    status: 'waiting',
    applyCreatedAt: '2024-02-13T12:57:11.266Z',
    title: 'K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)',
    place: '공릉 1동 행정복지센터',
    lessonStartDate: '2024-02-13T12:57:11.266Z',
    lessonStartTime: '2024-02-13T10:00:11.266Z',
    lessonEndTime: '2024-02-13T12:00:11.266Z',
    teacher: '친절한 쩡이쌤',
  },
];

const LessonApply = () => {
  const phoneNum = useSelector((state: RootState) => state.nonUser.phoneNum);
  const [getLessons, lessonResults] = useGetLessonsMutation();

  useEffect(() => {
    getLessons({ phoneNum: phoneNum });
  }, []);

  let content;

  if (lessonResults.error) {
    content = <p>수강 완료한 수업이 존재하지 않습니다.</p>;
  }

  if (lessonResults.data) {
    const Lessons = lessonResults.data.result.applicationList;

    content = (
      <>
        {Lessons.map((lesson, index) => (
          <Lesson
            key={index}
            // id={lesson.lessonId}
            // categoryId={lesson.categoryId}
            status={lesson.applicationStatus}
            createdAt={lesson.createdAt}
            title={lesson.title}
            place={lesson.place}
            startDate={lesson.lessonStartDate}
            startTime={lesson.lessonStartTime}
            endTime={lesson.lessonEndTime}
            teacher={lesson.lessonTeacherList[0].name}
            hoverMessage="신청 취소하기"
          />
        ))}
      </>
    );
  }

  return (
    <div className="flex flex-col items-center gap-10 px-32 py-10">
      {content}
    </div>
  );
};

export default LessonApply;
