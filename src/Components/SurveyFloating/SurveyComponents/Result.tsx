import LessonCard from '../../Announcement/LessonCard';
import TimeLine from '../../TimeLine';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResultList } from '../../../types/Response/Survey/SurveyLessonType';
import { transKrCategoryId } from '../../../utils/transKrCategoryId';

const FloatingResult = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleGoToSurvey = () => {
    // /floating로 이동
    navigate('/floating');
  };

  // 결과물 categoryId
  // 필요한 카테고리 한글명 얻을려면 아래 훅에 case 추가
  console.log(transKrCategoryId(state.data.result[0].categoryId));

  const handleGoToList = () => {
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
      <>
        <div className="py-4 text-2xl font-medium text-center">
          찾았어요! 이런 교육은 어떠세요?
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {Lessons.map((l: ResultList) => (
            <div key={l.lessonId} className="w-full mb-0">
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
      </>
    );
  } else {
    content = <p>조건에 알맞는 교육이 없네요! 다시 찾아볼까요?</p>;
  }

  return (
    <div>
      <TimeLine
        title="내용"
        imgSrc={`/assets/TimeLine/mypage.png`}
        contents="내용"
      />

      <div className="w-full h-[716px] bg-[#F2F2F2] flex flex-col justify-center items-center">
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
            className="hover:opacity-80 transition-all w-[307px] h-[56px] bg-primary01 rounded-[50px] text-white flex justify-center py-4 gap-2"
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

export default FloatingResult;
