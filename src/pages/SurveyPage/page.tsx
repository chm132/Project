import React from 'react';
import TimeLine from '../../Components/TimeLine';
import { categoryMapping } from '../CategoryPage/page';
import { useParams } from 'react-router-dom';

const SurveyPage = () => {
  const categoryName = useParams()?.category || '스마트폰';
  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
    </div>
  );
};

export default SurveyPage;
