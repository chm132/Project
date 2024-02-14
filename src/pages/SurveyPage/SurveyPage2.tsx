import React from 'react';
import TimeLine from '../../Components/TimeLine';
import { categoryMapping } from '../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';

const SurveyPage2 = () => {
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
          <div className="m-[56px] ">
            <div className=" w-full h-[24px]">
              <div className=" text-[20px] font-semibold float-left ">
                1. 어떤 것을 배우고 싶으세요?
              </div>
              <p className=" ml-[16px] mt-[5px] float-left">복수 응답 가능</p>
            </div>
            <br></br>
            <div className=" hover:bg-primary01 border-[#CCCCCC] pt-[14px] pl-[20px] rounded-[16px] border-[1px] h-[55px] mt-[10px]">
              기본 설정{'('}앱 설치, 환경설정 등{')'}
            </div>
            <div className=" hover:bg-primary01 border-[#CCCCCC] pt-[14px] pl-[20px] rounded-[16px] border-[1px] h-[55px] mt-[10px]">
              기본 활용{'('}카메라, 갤러리 등{')'}
            </div>
            <div className=" hover:bg-primary01 border-[#CCCCCC] pt-[14px] pl-[20px] rounded-[16px] border-[1px] h-[55px] mt-[10px]">
              실생활 활용{'('}카카오톡, 모바일 주문, 배달 앱 등{')'}
            </div>
          </div>
          <div className="m-[56px]">
            <div>
              <div className=" text-[20px] font-semibold float-left ">
                2. 어떻게 배우고 싶으세요?
              </div>
              <p className=" ml-[16px] mt-[5px] float-left">복수 응답 가능</p>
            </div>
            <br></br>
            <div className=" hover:bg-primary01 border-[#CCCCCC] pt-[14px] pl-[20px] rounded-[16px] border-[1px] h-[55px] mt-[35px]">
              교육기관 방문
            </div>
            <div className=" hover:bg-primary01 border-[#CCCCCC] pt-[14px] pl-[20px] rounded-[16px] border-[1px] h-[55px] mt-[10px]">
              우리 집으로 선생님이 방문
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage2;
