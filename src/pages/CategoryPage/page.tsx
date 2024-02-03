import { useLocation, useParams } from 'react-router-dom';
import TimeLine from '../../Components/TimeLine';
import { useGetCategoryLessonsQuery } from '../../redux/apis/categoryApi';
import FilterBox from '../../Components/Announcement/FilterBox';
import LessonCard from '../../Components/Announcement/LessonCard';
import Pagination from '../../Components/Pagination';

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

  // 원래는 아래 코드를 사용해야함
  let pageNo = new URLSearchParams(useLocation().search).get('pageNo');

  if (!pageNo) {
    pageNo = '1';
  }

  const { data } = useGetCategoryLessonsQuery({ categoryId });
  // error가 뜬경우 해당 페이지에 대한 데이터가 존재하지 않으면 에러가 남
  // 에러 메시지 꼭 읽어보기
  if (data) {
    const lessonData = data.result.lessonList;
    console.log(lessonData);

    // 페이지네이션용 더미데이터입니다 -> 실제 사용 아님
    const expandedLessonData = lessonData.concat(
      lessonData,
      lessonData,
      lessonData,
      lessonData,
      lessonData,
    );

    // 데이터 10개씩 페이지네이션을 위해 맞춰진 데이터입니다 -> 실제 사용 아님
    const modifyLessonData = lessonData.concat(lessonData);

    return (
      <div>
        <TimeLine
          title={categoryName}
          imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
          contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
        />
        <FilterBox />
        <div className="bg-gray-100">
          <section className="grid grid-cols-4 gap-8 py-12 px-36">
            {modifyLessonData.map((lesson, index) => (
              <LessonCard
                key={index}
                id={lesson.lessonId}
                img={lesson.file}
                title={lesson.title}
                endDate={lesson.gatherEndDate}
                startDate={lesson.gatherStartDate}
                endTime={lesson.lessonEndTime}
                startTime={lesson.lessonStartTime}
              />
            ))}
          </section>
          <Pagination
            page={Number(pageNo)}
            // totalItems={data.result.totalElements} 원래는 데이터를 받았을때의 totalElements로 넘겨줘야함
            totalItems={expandedLessonData.length}
            perPage={12}
          />
        </div>
      </div>
    );
  } else {
    return <p>해당 카테고리에 대한 공지가 준비중입니다...</p>;
  }
};

export default CategoryPage;
