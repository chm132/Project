import LessonCard from '../../Announcement/LessonCard';
import TimeLine from '../../TimeLine';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { categoryMapping } from './../../../pages/CategoryPage/page';
import { ResultList } from '../../../types/Response/Survey/SurveyLessonType';
import { transKrCategoryId } from '../../../utils/transKrCategoryId';

const SurveyResult = () => {
  const categoryName = useParams()?.category || '스마트폰';

  const { state } = useLocation();

  const navigate = useNavigate();

  const handleGoToSurvey = () => {
    // /survey로 이동
    navigate(`/${categoryName}/${state.data.result[0].categoryId}/survey`);
  };

  const handleGoToList = () => {
    // /:category/:categoryID로 이동
    navigate(
      `/${transKrCategoryId(state.data.result[0].categoryId)}/${
        state.data.result[0].categoryId
      }`,
    );
  };

  let content;

  if (state) {
    const Lessons = state.data.result;
    content = (
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {Lessons.map((l: ResultList) => (
          <div key={l.lessonId} className="w-full">
            <LessonCard
              id={l.lessonId}
              img={l.imgUrl}
              title={l.title}
              endDate={l.endDate}
              startDate={l.startDate}
              endTime={l.endTime}
              startTime={l.startTime}
            />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[716px] bg-[#F2F2F2] flex flex-col justify-center items-center">
        <div className="py-4 text-2xl font-medium text-center">
          찾았어요! 이런 교육은 어떠세요?
        </div>
        {content}
        <div className="flex justify-center w-full h-14 gap-14 mt-14">
          <button
            className="hover:opacity-80 w-[299px] h-[56px] bg-[#B3B3B3] rounded-[50px] text-white flex justify-center py-4 gap-2"
            onClick={handleGoToSurvey}
          >
            <img src="/assets/Survey/backimg.svg" alt="img" />
            <p className="font-medium">설문 다시하기</p>
          </button>
          <button
            className="hover:opacity-80 w-[307px] h-[56px] bg-primary01 rounded-[50px] text-white flex justify-center py-4 gap-2"
            onClick={handleGoToList}
          >
            <img src="/assets/Survey/listimg.svg" alt="img" />
            <p className="font-medium">목록으로 돌아가기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyResult;
