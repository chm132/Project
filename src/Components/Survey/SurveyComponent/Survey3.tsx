import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Input2 from '../../../Components/Survey/Input/Input2';
import Label1 from '../Label/Label1';
import Label2 from '../../../Components/Survey/Label/Label2';

type OnNextButtonClickType = (nextStep: number) => void;

interface Survey3Props {
  onNextButtonClick: OnNextButtonClickType;
}

function Survey3({ onNextButtonClick }: Survey3Props) {
  const handleButtonClick = () => {
    onNextButtonClick(4);
  };
  const PrevButtonClick = () => {
    onNextButtonClick(2);
  };

  const [clicked, setClicked] = useState('');
  const changeTag = (question: string) => {
    setClicked(question);
  };
  const buttonList = ['남성', '여성', '기타'];

  return (
    <div>
      <div className="survey w-full h-4/6 flex">
        <div className="box1 m-14">
          <div className="question flex">
            <p className=" text-[18px] font-semibold">
              3. 선호하는 선생님의 성별을 선택해주세요.
            </p>
          </div>
          <div className="click mt-6">
            <Input2
              question={buttonList[0]}
              onClick={() => changeTag(buttonList[0])}
              clicked={clicked === buttonList[0]}
            />
            <Input2
              question={buttonList[1]}
              onClick={() => changeTag(buttonList[1])}
              clicked={clicked === buttonList[1]}
            />
            <Input2
              question={buttonList[2]}
              onClick={() => changeTag(buttonList[2])}
              clicked={clicked === buttonList[2]}
            />
          </div>
        </div>
        <div className="box1 m-14">
          <div className="question flex">
            <p className=" text-[18px] font-semibold">
              4. 선호하는 선생님의 나이대를 선택해주세요.
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="click mt-6 flex gap-8">
            <Label1 age={20} />
            <Label1 age={30} />
            <Label1 age={40} />
            <Label1 age={50} />
            <Label1 age={60} />
            <Label2 content="상관없음" />
          </div>
        </div>
      </div>
      <div className="button flex">
        <button
          className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
          onClick={PrevButtonClick}
        >
          <img className=" px-1 py-1" src="/assets/Survey/previmg.svg"></img>
          <p className="font-medium">이전으로</p>
        </button>
        <button
          className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
          onClick={handleButtonClick}
        >
          <p className="font-medium">다음으로</p>
          <img className=" px-1 py-1" src="/assets/Survey/nextimg.svg "></img>
        </button>
      </div>
    </div>
  );
}

export default Survey3;
