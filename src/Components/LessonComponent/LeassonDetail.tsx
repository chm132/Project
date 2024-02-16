// 피그마의 공고 상세 컴포넌트 입니다!

import React from 'react';
import LeassonInput from './Input';
import LeassonInput2 from './Input2';

function LeassonDetail() {
  return (
    <div className="w-[603px] h-[989px] rounded-3xl m-auto mt-8">
      <div className=" w-full h-auto min-h-[176px] bg-primary01 rounded-t-3xl overflow-hidden break-keep p-10 text-center font-bold text-[30px] text-[#FFFFFF]">
        카카오톡, 생활에 유용한 앱 활용 텍스트 길이에 따라 영역이 늘어나요
      </div>

      <div className="1 w-[523px] h-[733px] gap-10 m-auto mt-10">
        <div className="2 w-full h-[81px] gap-4 flex">
          <div className="3 w-16 h-16 rounded-full bg-primary01 flex items-center justify-center shadow-md bg-opacity-85">
            <img
              src="/assets/Survey/categoryimg.svg"
              alt="임시 카테고리 이미지"
            />
          </div>
          <div className="4 w-[443px] h-full text-[18px] leading-[27px] font-normal ">
            1. 카카오톡의 다양한 기능을 알아보는 과정 (카메라, 오픈채팅방,
            카카오T, 카카오 선물하기 등)
            <br /> 2. 배달앱, 건강기록앱, 캘린더앱 사용방법 알아보기
          </div>
        </div>
        <div className="5 mt-10 ">
          <LeassonInput
            iconSrc="/assets/Leasson/date.svg"
            label="일 &nbsp;시"
            value="2024.2.8(목) ~ 3.29.(금) 14:00~16:00"
          />
          <LeassonInput
            iconSrc="/assets/Leasson/teacher.svg"
            label="강 &nbsp;사"
            value="김진형"
          />
          <LeassonInput
            iconSrc="/assets/Leasson/personnel.svg"
            label="인 &nbsp;원"
            value="16명"
          />
          <LeassonInput2
            iconSrc="/assets/Leasson/book.svg"
            label="학습방법"
            value="오프라인"
          />
          <LeassonInput
            iconSrc="/assets/Leasson/pay.svg"
            label="수 강 료"
            value="20,000원"
          />
          <LeassonInput2
            iconSrc="/assets/Leasson/stuff.svg"
            label="준 비 물"
            value="스마트폰(안드로이드)"
          />
        </div>
      </div>
      <img
        src="/assets/Leasson/Announcement.svg"
        alt="공고샘플 승인 대기 여부"
        className=" mt-[49px] mb-[30px]"
      />
      <img src="/assets/Leasson/Announcement2.svg" alt="공고샘플 수강료" />
    </div>
  );
}

export default LeassonDetail;

//w-full h-auto min-h-[176px] bg-primary01 rounded-t-3xl overflow-hidden break-all p-10 text-center text-[32px] font-bold text-[#FFFFFF]
