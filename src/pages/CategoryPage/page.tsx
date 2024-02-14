import { useLocation, useParams } from 'react-router-dom';
import TimeLine from '../../Components/TimeLine';
import { useGetCategoryLessonsQuery } from '../../redux/apis/categoryApi';
import FilterBox from '../../Components/Announcement/FilterBox';
import LessonCard from '../../Components/Announcement/LessonCard';
import Pagination from '../../Components/Pagination';
import { useScroll } from '../../utils/useScroll';
import { useState } from 'react';
import { useDebounce } from '../../utils/useDebounce';

export const categoryMapping: { [key: string]: string } = {
  스마트폰: 'smartphone',
  컴퓨터: 'computer',
  키오스크: 'kiosk',
  외국어: 'foreignLanguage',
  운동: 'exercise',
  공예: 'art',
  부동산: 'estate',
  심리: 'mental',
  '취업/창업': 'employ',
  요리: 'cook',
  악기: 'instrument',
  자산: 'asset',
};

const CategoryPage = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const categoryId = Number(useParams()?.categoryId);
  const [keyword, setKeyword] = useState('');
  const enteredKeyword = useDebounce(keyword, 500);

  const { y: scrollHeight } = useScroll();
  const fixStandard = scrollHeight > 500; // display: fixed 이정표 역할

  // 원래는 아래 코드를 사용해야함
  let pageNo = new URLSearchParams(useLocation().search).get('pageNo');

  if (!pageNo) {
    pageNo = '1';
  }

  const { data, error } = useGetCategoryLessonsQuery(
    { categoryId, pageNo, keyword: enteredKeyword },
    {
      refetchOnMountOrArgChange: true,
    },
  );
  // error가 뜬경우 해당 페이지에 대한 데이터가 존재하지 않으면 에러가 남
  // 에러 메시지 꼭 읽어보기
  let content;

  if (error) {
    content = <p>Network Error...</p>;
  }

  if (data) {
    const lessonData = data.result.lessonPreviewDTOList;

    content = (
      <div className="bg-gray-100">
        <section className="grid grid-cols-4 gap-8 py-12 px-36">
          {lessonData.map((lesson, index) => (
            <LessonCard
              key={index}
              id={lesson.lessonId}
              img={lesson.imageUrl}
              title={lesson.title}
              endDate={lesson.gatherEndDate}
              startDate={lesson.lessonStartDate}
              endTime={lesson.lessonEndTime}
              startTime={lesson.lessonStartTime}
            />
          ))}
        </section>
        <Pagination
          page={Number(pageNo)}
          totalItems={data.result.totalElements}
          perPage={10}
        />
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
      <FilterBox fix={fixStandard} setKeyword={setKeyword} />
      {content}
    </div>
  );
};

export default CategoryPage;
