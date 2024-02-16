import { useState } from 'react';
import Input2 from '../../../Components/Survey/Input/Input2';
import Label1 from '../Label/Label1';
import { transValue } from '../../../utils/transValue';
import { useDispatch } from 'react-redux';
import { setSurveyTwo } from '../../../redux/slices/surveySlice';

interface Survey3Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey3({ onNextButtonClick }: Survey3Props) {
  const dispatch = useDispatch();

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
  const buttonList = ['남성', '여성', '상관없음'];

  const [isChecked, setIsChecked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChange = (index: number, checked: boolean) => {
    const updatedArray = [...isChecked];
    updatedArray[index] = checked;
    setIsChecked(updatedArray);
  };

  dispatch(
    setSurveyTwo({
      teacher_gender: clicked === '남성' ? 1 : clicked === '여성' ? 2 : 3,
      teacher_age: isChecked
        .map((value, index) => (value ? (index + 2) * 10 : null))
        .filter((value): value is number => value !== null),
    }),
  );

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              3. 선호하는 선생님의 성별을 선택해주세요.
            </p>
          </div>
          <div className="mt-6 click">
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
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              4. 선호하는 선생님의 나이대를 선택해주세요.
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="flex gap-8 mt-6 click">
            <Label1
              content="20대"
              isChecked={isChecked[0]}
              onChange={(isChecked) => handleChange(0, isChecked)}
            />
            <Label1
              content="30대"
              isChecked={isChecked[1]}
              onChange={(isChecked) => handleChange(1, isChecked)}
            />
            <Label1
              content="40대"
              isChecked={isChecked[2]}
              onChange={(isChecked) => handleChange(2, isChecked)}
            />
            <Label1
              content="50대"
              isChecked={isChecked[3]}
              onChange={(isChecked) => handleChange(3, isChecked)}
            />
            <Label1
              content="60대"
              isChecked={isChecked[4]}
              onChange={(isChecked) => handleChange(4, isChecked)}
            />
            <Label1
              content="상관없음"
              isChecked={isChecked[5]}
              onChange={(isChecked) => handleChange(5, isChecked)}
            />
          </div>
        </div>
      </div>
      <div className="flex button">
        <button
          className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
          onClick={PrevButtonClick}
        >
          <img
            className="px-1 py-1 "
            src="/assets/Survey/previmg.svg"
            alt="img"
          />
          <p className="font-medium">이전으로</p>
        </button>
        <button
          className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
          onClick={handleButtonClick}
        >
          <p className="font-medium">다음으로</p>
          <img
            className="px-1 py-1 "
            src="/assets/Survey/nextimg.svg "
            alt="img"
          />
        </button>
      </div>
    </div>
  );
}

export default Survey3;
