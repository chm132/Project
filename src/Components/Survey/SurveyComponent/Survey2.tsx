import { useState } from 'react';
import Input1 from './../Input/Input1';
import { transValue } from '../../../utils/transValue';
import { useDispatch } from 'react-redux';
import { setSurveyOne } from '../../../redux/slices/surveySlice';

interface Survey2Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey2({ onNextButtonClick }: Survey2Props) {
  const dispatch = useDispatch();
  const [isCheckedFirst, setIsCheckedFirst] = useState([false, false, false]);
  const [isCheckedSecond, setIsCheckedSecond] = useState([false, false]);

  const handleChangeFirst = (index: number, isChecked: boolean) => {
    const updatedArray = [...isCheckedFirst];
    updatedArray[index] = isChecked;
    setIsCheckedFirst(updatedArray);
  };

  const handleChangeSecond = (index: number, isChecked: boolean) => {
    const updatedArray = [...isCheckedSecond];
    updatedArray[index] = isChecked;
    setIsCheckedSecond(updatedArray);
  };

  const handleButtonClick = () => {
    onNextButtonClick(3);
  };

  dispatch(
    setSurveyOne({
      sub_categoryIds: transValue(isCheckedFirst),
      classType: isCheckedSecond
        .map((value, index) => (value ? index + 1 : null))
        .filter((value): value is number => value !== null),
    }),
  );

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              1. 어떤 것을 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="mt-6 click">
            <Input1
              question="기본 설정(앱 설치, 환경설정 등)"
              isChecked={isCheckedFirst[0]}
              onChange={(isChecked) => handleChangeFirst(0, isChecked)}
            />
            <Input1
              question="기본 활용(카메라, 갤러리 등)"
              isChecked={isCheckedFirst[1]}
              onChange={(isChecked) => handleChangeFirst(1, isChecked)}
            />
            <Input1
              question="실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)"
              isChecked={isCheckedFirst[2]}
              onChange={(isChecked) => handleChangeFirst(2, isChecked)}
            />
          </div>
        </div>
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              2. 어떻게 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6  px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="mt-6 click">
            <Input1
              question="교육기관 방문"
              isChecked={isCheckedSecond[0]}
              onChange={(isChecked) => handleChangeSecond(0, isChecked)}
            />
            <Input1
              question="우리 집으로 선생님 방문"
              isChecked={isCheckedSecond[1]}
              onChange={(isChecked) => handleChangeSecond(1, isChecked)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleButtonClick}
        className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-[451px] mt-[60px] flex justify-center py-3"
      >
        <p className="font-medium">다음으로</p>
        <img
          className="px-1 py-1 "
          src="/assets/Survey/nextimg.svg"
          alt="img"
        />
      </button>
    </div>
  );
}

export default Survey2;
