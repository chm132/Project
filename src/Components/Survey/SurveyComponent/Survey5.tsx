import React, { useState } from 'react';
import Input2 from '../../../Components/Survey/Input/Input2';
import Label3 from '../Label/Label3';
import { useDispatch } from 'react-redux';
import { setSurveyFourth } from '../../../redux/slices/surveySlice';

interface Survey5Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey5({ onNextButtonClick }: Survey5Props) {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    onNextButtonClick(6);
  };
  const PrevButtonClick = () => {
    onNextButtonClick(4);
  };

  const [genderClicked, setGenderClicked] = useState('');
  const [ageClicked, setAgeClicked] = useState('');

  const changeTag = (category: string, value: string) => {
    if (category === 'gender') {
      setGenderClicked(value);
    } else if (category === 'age') {
      setAgeClicked(value);
    }
  };

  const genderOptions = ['남성', '여성', '기타'];
  const ageOptions = ['20', '30', '40', '50', '60', '70'];

  dispatch(
    setSurveyFourth({
      age: Number(ageClicked),
      gender: genderClicked === '남성' ? 1 : genderClicked === '여성' ? 2 : 3,
    }),
  );

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className="text-[18px] font-semibold">
              6. 고객님의 성별을 알려주세요.
            </p>
          </div>
          <div className="mt-6 click">
            {genderOptions.map((option, index) => (
              <Input2
                key={index}
                question={option}
                onClick={() => changeTag('gender', option)}
                clicked={genderClicked === option}
              />
            ))}
          </div>
        </div>
        <div className="box1 m-14">
          <div className="flex question">
            <p className="text-[18px] font-semibold">
              7. 고객님의 나이대를 알려주세요.
            </p>
          </div>
          <div className="flex gap-8 mt-6 click">
            {ageOptions.map((option, index) => (
              <Label3
                key={index}
                age={option}
                onClick={() => changeTag('age', option)}
                clicked={ageClicked === option}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex button">
        <button
          className="hover:opacity-80 w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
          onClick={PrevButtonClick}
        >
          <img
            className="px-1 py-1"
            src="/assets/Survey/previmg.svg"
            alt="이전"
          />
          <p className="font-medium">이전으로</p>
        </button>
        <button
          className="hover:opacity-80 w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
          onClick={handleButtonClick}
        >
          <p className="font-medium">다음으로</p>
          <img
            className="px-1 py-1"
            src="/assets/Survey/nextimg.svg"
            alt="다음"
          />
        </button>
      </div>
    </div>
  );
}

export default Survey5;
