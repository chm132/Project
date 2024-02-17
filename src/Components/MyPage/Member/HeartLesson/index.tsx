import HeartLessonCard from '../HeartLessonCard';
import { useGetLikeLessonsQuery } from '../../../../redux/apis/myPageApi';

const HeartLesson = () => {
  const { data, isLoading, error } = useGetLikeLessonsQuery();

  console.log(data);

  let content;

  if (isLoading) {
    content = <p>loading...</p>;
  }

  if (error) {
    content = <p>Network Error!</p>;
  }

  if (data) {
    const HeartLessons = data.result;

    content = (
      <section className="grid grid-cols-4 gap-8 py-12 px-36">
        {HeartLessons.map((lesson, index) => (
          <HeartLessonCard
            key={index}
            id={lesson.lessonId}
            img={lesson.imgUrl}
            title={lesson.title}
            endDate={lesson.endDate}
            startDate={lesson.startDate}
            endTime={lesson.endTime}
            startTime={lesson.startTime}
          />
        ))}
      </section>
    );
  }

  return (
    <div className="bg-gray-100 " style={{ height: '960px' }}>
      {content}
    </div>
  );
};

export default HeartLesson;
