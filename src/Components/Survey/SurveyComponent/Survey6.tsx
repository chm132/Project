import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface Citydetails {
  [city: string]: {
    [gu: string]: string[];
  };
}

const cityDetails: Citydetails = {
  서울특별시: {
    노원구: ['중계동', '상계동', '월계동', '하계동'],
    서초구: ['서초동', '양재동', '잠원동', '반포동'],
    강남구: ['역삼동', '삼성동', '청담동', '신사동'],
    도봉구: ['도봉동', '방학동', '쌍문동', '창동'],
    송파구: ['잠실동', '가락동', '문정동', '방이동'],
    강서구: ['등촌동', '화곡동', '발산동', '우장산동'],
  },
  경기도: {
    구리시: ['인창동', '토평동', '교문동', '수택동'],
    수원시: ['장안구', '영통구', '권선구', '팔달구'],
    성남시: ['수정구', '분당구', '중원구', '수정구'],
    안양시: ['동안구', '만안구', '동안구', '만안구'],
    평택시: ['서정동', '비전동', '서탄면', '배양동'],
    의정부시: ['의정부1동', '의정부2동', '의정부3동', '의정부4동'],
  },
  부산광역시: {
    사하구: ['괴정동', '당리동', '하단동', '장림동'],
    수영구: ['망미동', '민락동', '남천동', '마린시티'],
    진구: ['부전동', '전포동', '개금동', '당감동'],
    동구: ['초량동', '수정동', '좌천동', '범일동'],
    금정구: ['구서동', '금사동', '부곡동', '청룡동'],
    해운대구: ['우동', '좌동', '중동', '송정동'],
  },
  인천광역시: {
    부평구: ['부평동', '청천동', '산곡동', '십정동'],
    남동구: ['간석동', '논현동', '도화동', '구월동'],
    연수구: ['연수동', '동춘동', '옥련동', '송도동'],
    미추홀구: ['주안동', '도화동', '구월동', '청라동'],
    계양구: ['효성동', '작전동', '동양동', '임학동'],
    서구: ['검단동', '연희동', '마전동', '가좌동'],
  },
  울산광역시: {
    남구: ['삼산동', '신정동', '달동', '무거동'],
    동구: ['대송동', '서부동', '남목동', '화정동'],
    북구: ['염포동', '송정동', '양정동', '삼산동'],
    중구: ['남외동', '북외동', '신암동', '내외동'],
  },
  대구광역시: {
    남구: ['봉덕동', '대명동', '이천동', '수창동'],
    동구: ['봉무동', '신암동', '방촌동', '수송동'],
    서구: ['내당동', '비산동', '평리동', '상중이동'],
    북구: ['칠성동', '태전동', '동호동', '산격동'],
  },
  광주광역시: {
    동구: ['충장로', '용봉동', '서석동', '지산동'],
    서구: ['양동', '동천동', '치평동', '풍암동'],
    남구: ['주월동', '방림동', '송하동', '월산동'],
    북구: ['문흥동', '오룡동', '일곡동', '충효동'],
  },
  충청남도: {
    천안시: ['동남구', '서북구', '백석동', '불당동'],
    공주시: ['공주시1', '공주시2', '공주시3', '공주시4'],
    보령시: ['보령시1', '보령시2', '보령시3', '보령시4'],
    아산시: ['아산시1', '아산시2', '아산시3', '아산시4'],
  },
};

type OnNextButtonClickType = (nextStep: number) => void;

interface Survey6Props {
  onNextButtonClick: OnNextButtonClickType;
}

function Survey6({ onNextButtonClick }: Survey6Props) {
  const handleButtonClick = () => {
    onNextButtonClick(6);
  };
  const PrevButtonClick = () => {
    onNextButtonClick(5);
  };

  const navigate = useNavigate();

  const [selectedCity, setSelectedCity] = useState('');
  const [showCities, setShowCities] = useState(false);
  const [selectedGu, setSelectedGu] = useState('');
  const [showGu, setShowGu] = useState(false);
  const [selectedDong, setSelectedDong] = useState('');
  const [showDong, setShowDong] = useState(false);

  const resetSelection = () => {
    setSelectedCity('');
  };
  const resetSelection2 = () => {
    setSelectedGu('');
  };
  const resetSelection3 = () => {
    setSelectedDong('');
  };

  const handleCityClick = (city: string) => {
    setSelectedCity(city);
    setShowCities(false);
  };
  const handleGuClick = (Gu: string) => {
    setSelectedGu(Gu);
    setShowGu(false);
  };
  const handleDongClick = (dong: string) => {
    setSelectedDong(dong);
    setShowDong(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="pt-14 pl-14 gap-16">
          <p className=" text-lg font-semibold">
            8. 고객님의 주소를 알려주세요.
          </p>
          <div className="flex gap-7 w-[980px] h-[300px]">
            <div className="pt-5 flex flex-col gap-2 w-[264px] h-[250px]">
              <div
                className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 ${
                  selectedCity ? 'border-[#EC9E29]' : 'border-[#CCCCCC]'
                }`}
                onClick={() => setShowCities(!showCities)}
              >
                <p
                  className={`text-sm ${
                    selectedCity ? 'text-black' : 'text-[#999999]'
                  }`}
                >
                  {selectedCity ? selectedCity : '시/도'}
                </p>
                <div className=" mt-1" onClick={resetSelection}>
                  <img
                    src={
                      selectedCity
                        ? '/assets/Survey/orangecheck.svg'
                        : '/assets/Survey/graycheck.svg'
                    }
                  />
                </div>
              </div>
              {showCities && (
                <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container">
                  <div className="mt-6 flex flex-col gap-5 h-3000">
                    {Object.keys(cityDetails).map((city, index) => (
                      <p key={index} onClick={() => handleCityClick(city)}>
                        {city}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-5 flex flex-col gap-2 w-[264px] h-[250px]">
              <div
                className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 ${
                  selectedGu ? 'border-[#EC9E29]' : 'border-[#CCCCCC]'
                }`}
                onClick={() => setShowGu(!showGu)}
              >
                <p
                  className={`text-sm ${
                    selectedGu ? 'text-black' : 'text-[#999999]'
                  }`}
                >
                  {selectedGu ? selectedGu : '시/군/구'}
                </p>
                <div className=" mt-1" onClick={resetSelection2}>
                  <img
                    src={
                      selectedGu
                        ? '/assets/Survey/orangecheck.svg'
                        : '/assets/Survey/graycheck.svg'
                    }
                  />
                </div>
              </div>
              {showGu && (
                <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container">
                  <div className="mt-6 flex flex-col gap-5 h-3000">
                    {selectedCity &&
                      cityDetails[selectedCity] &&
                      Object.keys(cityDetails[selectedCity]).map(
                        (gu, index) => (
                          <p key={index} onClick={() => handleGuClick(gu)}>
                            {gu}
                          </p>
                        ),
                      )}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-5 flex flex-col gap-2 w-[264px] h-[250px]">
              <div
                className={`border flex justify-between px-5 py-3 rounded-2xl bg-[#FFFFFF] z-0 ${
                  selectedDong ? 'border-[#EC9E29]' : 'border-[#CCCCCC]'
                }`}
                onClick={() => setShowDong(!showDong)}
              >
                <p
                  className={`text-sm ${
                    selectedDong ? 'text-black' : 'text-[#999999]'
                  }`}
                >
                  {selectedDong ? selectedDong : '읍/면/동'}
                </p>
                <div className=" mt-1" onClick={resetSelection3}>
                  <img
                    src={
                      selectedDong
                        ? '/assets/Survey/orangecheck.svg'
                        : '/assets/Survey/graycheck.svg'
                    }
                  />
                </div>
              </div>
              {showDong && (
                <div className="h-60 w-100 border rounded-2xl px-6 py-5 text-sm mt-[-36px] overflow-auto scrollbar-container">
                  <div className="mt-6 flex flex-col gap-5 h-3000">
                    {selectedCity &&
                      selectedGu &&
                      cityDetails[selectedCity][selectedGu].map(
                        (dong, index) => (
                          <p key={index} onClick={() => handleDongClick(dong)}>
                            {dong}
                          </p>
                        ),
                      )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="button flex mt-[-70px]">
          <button
            className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
            onClick={PrevButtonClick}
          >
            <img className=" px-1 py-1" src="/assets/Survey/previmg.svg"></img>
            <p className="font-medium">이전으로</p>
          </button>
          <button className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3">
            <p className="font-medium">다음으로</p>
            <img className=" px-1 py-1" src="/assets/Survey/nextimg.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Survey6;
