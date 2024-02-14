import { useLocation } from 'react-router-dom';
import { useGetDetailLessonQuery } from '../../redux/apis/categoryApi';

const LessonPage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const lessonId = query.get('lessonId');

  const { data } = useGetDetailLessonQuery(Number(lessonId));
  console.log(data);

  return <div>LessonPage</div>;
};

export default LessonPage;
