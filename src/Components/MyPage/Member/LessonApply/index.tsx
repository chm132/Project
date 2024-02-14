import Lesson from '../../Lesson';

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
  return (
    <div className="flex flex-col items-center gap-10 px-32 py-10">
      {Lessons.map((lesson, index) => (
        <Lesson
          key={index}
          id={lesson.lessonId}
          category={lesson.category}
          status={lesson.status}
          createdAt={lesson.applyCreatedAt}
          title={lesson.title}
          place={lesson.place}
          startDate={lesson.lessonStartDate}
          startTime={lesson.lessonStartTime}
          endTime={lesson.lessonEndTime}
          teacher={lesson.teacher}
          hoverMessage="신청 취소하기"
        />
      ))}
    </div>
  );
};

export default LessonApply;
