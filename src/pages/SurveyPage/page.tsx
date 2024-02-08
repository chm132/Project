import React from 'react';
import TimeLine from '../../Components/TimeLine';
import { categoryMapping } from '../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';

const SurveyPage = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const navigate = useNavigate();
  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl flex relative m-auto top-[47px]">
          <div className=" relative top-[158px] left-[290px]">
            <p className=" text-[32px] font-semibold text-center">
              고객님께 딱 맞는 교육을 찾아드릴게요!
            </p>
            <p className=" text-[24px] text-center">몇 가지만 답해주세요.</p>
            <button
              className=" relative top-[36px] left-[130px] w-[271px] h-[51px] bg-primary01 rounded-[50px] text-white"
              onClick={() => navigate('/스마트폰/1/survey/2')}
            >
              <p className="font-medium">설문 시작하기 {'>'}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
