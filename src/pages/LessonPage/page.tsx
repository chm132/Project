import { useLocation } from 'react-router-dom';
import { useGetDetailLessonQuery } from '../../redux/apis/categoryApi';
import LeassonDetail from '../../Components/LessonComponent/LeassonDetail';
import Apply from '../../Components/LessonComponent/Apply';

const LessonPage = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const lessonId = query.get('lessonId');

  const { data } = useGetDetailLessonQuery(Number(lessonId));
  console.log(data);

  return (
    <div className=" w-full h-[1577px] bg-[#F2F2F2]">
      <div className=" w-[1142px] h-[1547px] m-auto flex gap-4 ">
        <div className="w-[756px] h[1254px] bg-[#FFFFFF] mt-8 rounded-t-3xl">
          <LeassonDetail />
        </div>
        <div className=" w-[370px] h-[1517px] bg-[#FFFFFF] rounded-3xl mt-8">
          <Apply />
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
