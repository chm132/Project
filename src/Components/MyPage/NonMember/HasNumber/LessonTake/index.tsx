import Lesson from '../../../Lesson';
import { Lessons } from '../LessonApply';

const LessonTake = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-32 py-10">
      {Lessons.map((lesson, index) => (
        <Lesson
          key={index}
          id={lesson.lessonId}
          category={lesson.category}
          createdAt={lesson.applyCreatedAt}
          title={lesson.title}
          place={lesson.place}
          startDate={lesson.lessonStartDate}
          startTime={lesson.lessonStartTime}
          endTime={lesson.lessonEndTime}
          teacher={lesson.teacher}
          hoverMessage="이력 삭제하기"
        />
      ))}
    </div>
  );
};

export default LessonTake;
