import React from 'react';
import Input1 from './../Input/Input1';

interface Survey2Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey2({ onNextButtonClick }: Survey2Props) {
  const handleButtonClick = () => {
    onNextButtonClick(3);
  };

  return (
    <div>
      <div className="survey w-full h-4/6 flex">
        <div className="box1 m-14">
          <div className="question flex">
            <p className=" text-[18px] font-semibold">
              1. 어떤 것을 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="click mt-6">
            <Input1 question="기본 설정(앱 설치, 환경설정 등)" />
            <Input1 question="기본 활용(카메라, 갤러리 등)" />
            <Input1 question="실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)" />
          </div>
        </div>
        <div className="box1 m-14">
          <div className="question flex">
            <p className=" text-[18px] font-semibold">
              2. 어떻게 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6  px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="click mt-6">
            <Input1 question="교육기관 방문" />
            <Input1 question="우리 집으로 선생님 방문" />
          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-[451px] mt-[60px] flex justify-center py-3"
      >
        <p className="font-medium">다음으로</p>
        <img className=" px-1 py-1" src="/assets/Survey/nextimg.svg"></img>
      </button>
    </div>
  );
}

export default Survey2;
