import { useGetUserCompletedLessonsQuery } from '../../../../redux/apis/myPageApi';
import Lesson from '../../Lesson';

const LessonTake = () => {
  const { data, isLoading, error } = useGetUserCompletedLessonsQuery();

  let content;

  if (isLoading) {
    content = <p>수강이력 불러오는중입니다...</p>;
  }

  if (error) {
    content = <p>수강 완료한 수업이 존재하지 않습니다.</p>;
  }

  if (data) {
    const Lessons = data.result.applicationList;

    content = (
      <>
        {Lessons.map((lesson, index) => (
          <Lesson
            key={index}
            id={lesson.lessonId}
            category={lesson.categoryName}
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
      </>
    );
  }

  return (
    <div className="flex flex-col items-center gap-10 px-32 py-10">
      {content}
    </div>
  );
};

export default LessonTake;
