import { useEffect } from 'react';
import Lesson from '../../../Lesson';
import { useGetCompletedLessonsMutation } from '../../../../../redux/apis/guestApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';

const LessonComplete = () => {
  const phoneNum = useSelector((state: RootState) => state.nonUser.phoneNum);

  const [getCompletedLessons, lessonResults] = useGetCompletedLessonsMutation();

  useEffect(() => {
    getCompletedLessons({ phoneNum: phoneNum });
  }, []);

  let content;

  if (lessonResults.error) {
    content = <p>수강 완료한 수업이 존재하지 않습니다.</p>;
  }

  if (lessonResults.data) {
    const Lessons = lessonResults.data.result.applicationList;

    content = (
      <>
        (
        {Lessons.map((lesson, index) => (
          <Lesson
            key={index}
            // id={lesson.lessonId}
            // categoryId={lesson.categoryId}
            createdAt={lesson.createdAt}
            title={lesson.title}
            place={lesson.place}
            startDate={lesson.lessonStartDate}
            startTime={lesson.lessonStartTime}
            endTime={lesson.lessonEndTime}
            teacher={lesson.lessonTeacherList[0].name}
            hoverMessage="이력 삭제하기"
          />
        ))}
        )
      </>
    );
  }

  return (
    <div className="flex flex-col items-center gap-10 px-32 py-10">
      {content}
    </div>
  );
};

export default LessonComplete;
