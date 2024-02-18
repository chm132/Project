import React, { useState } from 'react';
import Input2 from '../../Survey/Input/Input2';
import Label3 from '../../Survey/Label/Label3';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setSurveyFourth } from '../../../redux/slices/surveySlice';

function Floating7() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nextHandler = () => {
    navigate('/floating?page=8');
  };
  const prevHandler = () => {
    navigate('/floating?page=6');
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
              8. 고객님의 성별을 알려주세요.
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
              9. 고객님의 나이대를 알려주세요.
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
          onClick={prevHandler}
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
          onClick={nextHandler}
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

export default Floating7;
