import React, { useEffect, useState } from 'react';
import TimeLine from '../../Components/TimeLine';
import { categoryMapping } from '../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';
import Survey1 from '../../Components/Survey/SurveyComponent/Survey1';
import Survey2 from '../../Components/Survey/SurveyComponent/Survey2';
import Survey3 from '../../Components/Survey/SurveyComponent/Survey3';
import Survey4 from '../../Components/Survey/SurveyComponent/Survey4';
import Survey5 from '../../Components/Survey/SurveyComponent/Survey5';
import Survey6 from '../../Components/Survey/SurveyComponent/Survey6';
import ProgressBar from '../../Components/Survey/SurveyComponent/ProgressBar';

const SurveyComponents = [Survey1, Survey2, Survey3, Survey4, Survey5, Survey6];

const SurveyPage = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const [step, setStep] = useState(1);

  const handleNextButtonClick = (nextStep: number) => {
    // Survey 컴포넌트에서 전달받은 nextStep으로 step을 변경
    setStep(nextStep);
  };

  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <ProgressBar step={step} />
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl flex relative m-auto top-[47px]">
          {SurveyComponents.map(
            (SurveyComponent, index) =>
              step === index + 1 && (
                <SurveyComponent
                  key={index}
                  onNextButtonClick={handleNextButtonClick}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
