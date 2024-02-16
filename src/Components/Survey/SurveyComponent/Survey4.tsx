import { useState } from 'react';
import Label1 from '../Label/Label1';
import { transValue } from '../../../utils/transValue';
import { useDispatch } from 'react-redux';
import { setSurveyThird } from '../../../redux/slices/surveySlice';
import Input2 from '../Input/Input2';
import Input1 from '../Input/Input1';

interface Survey4Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey4({ onNextButtonClick }: Survey4Props) {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    onNextButtonClick(5);
  };
  const PrevButtonClick = () => {
    onNextButtonClick(3);
  };
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
    setSurveyThird({
      choices: transValue(isChecked),
    }),
  );

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              5. 수업이 가능한 시간대는 언젠가요?
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="grid grid-cols-2 mt-4 gap-36">
            <section className="flex flex-col gap-4">
              <Input1
                question="평일 오전(오전 8시 ~ 오후 12시)"
                isChecked={isChecked[0]}
                onChange={(isChecked) => handleChange(0, isChecked)}
              />
              <Input1
                question="평일 오후(오후 12시 ~ 오후 6시)"
                isChecked={isChecked[1]}
                onChange={(isChecked) => handleChange(1, isChecked)}
              />
              <Input1
                question="평일 저녁(오후 6시 ~ 오후 11시)"
                isChecked={isChecked[2]}
                onChange={(isChecked) => handleChange(2, isChecked)}
              />
            </section>

            <section className="flex flex-col gap-4">
              <Input1
                question="주말 오전(오전 8시 ~ 오후 12시)"
                isChecked={isChecked[3]}
                onChange={(isChecked) => handleChange(3, isChecked)}
              />
              <Input1
                question="주말 오후(오후 12시 ~ 오후 6시)"
                isChecked={isChecked[4]}
                onChange={(isChecked) => handleChange(4, isChecked)}
              />
              <Input1
                question="주말 저녁(오후 6시 ~ 오후 11시)"
                isChecked={isChecked[5]}
                onChange={(isChecked) => handleChange(5, isChecked)}
              />
            </section>
          </div>

          {/* <div className="flex">
            <p className=" text-[16px] text-[#666666] mt-16 mr-9">
              오전 (8:00 ~ 12:00)
            </p>
            <div className="flex gap-6 mt-6 click">
              <Label1
                content="월"
                isChecked={isCheckedFirst[0]}
                onChange={(isChecked) => handleChangeFirst(0, isChecked)}
              />
              <Label1
                content="화"
                isChecked={isCheckedFirst[1]}
                onChange={(isChecked) => handleChangeFirst(1, isChecked)}
              />
              <Label1
                content="수"
                isChecked={isCheckedFirst[2]}
                onChange={(isChecked) => handleChangeFirst(2, isChecked)}
              />
              <Label1
                content="목"
                isChecked={isCheckedFirst[3]}
                onChange={(isChecked) => handleChangeFirst(3, isChecked)}
              />
              <Label1
                content="금"
                isChecked={isCheckedFirst[4]}
                onChange={(isChecked) => handleChangeFirst(4, isChecked)}
              />
              <Label1
                content="토"
                isChecked={isCheckedFirst[5]}
                onChange={(isChecked) => handleChangeFirst(5, isChecked)}
              />
              <Label1
                content="일"
                isChecked={isCheckedFirst[6]}
                onChange={(isChecked) => handleChangeFirst(6, isChecked)}
              />
            </div>
          </div> */}
          {/* <div className="flex">
            <p className="text-[16px] text-[#666666] mt-10 mr-9">
              오후 (12:00 ~ 18:00)
            </p>
            <div className="flex gap-6 mt-6 click">
              <Label1
                content=""
                isChecked={isCheckedSecond[0]}
                onChange={(isChecked) => handleChangeSecond(0, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[1]}
                onChange={(isChecked) => handleChangeSecond(1, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[2]}
                onChange={(isChecked) => handleChangeSecond(2, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[3]}
                onChange={(isChecked) => handleChangeSecond(3, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[4]}
                onChange={(isChecked) => handleChangeSecond(4, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[5]}
                onChange={(isChecked) => handleChangeSecond(5, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedSecond[6]}
                onChange={(isChecked) => handleChangeSecond(6, isChecked)}
              />
            </div>
          </div>
          <div className="flex">
            <p className="text-[16px] text-[#666666] mt-10 mr-9">
              저녁 (18:00 ~ 23:00)
            </p>
            <div className="flex gap-6 mt-6 click">
              <Label1
                content=""
                isChecked={isCheckedThird[0]}
                onChange={(isChecked) => handleChangeThird(0, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[1]}
                onChange={(isChecked) => handleChangeThird(1, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[2]}
                onChange={(isChecked) => handleChangeThird(2, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[3]}
                onChange={(isChecked) => handleChangeThird(3, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[4]}
                onChange={(isChecked) => handleChangeThird(4, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[5]}
                onChange={(isChecked) => handleChangeThird(5, isChecked)}
              />
              <Label1
                content=""
                isChecked={isCheckedThird[6]}
                onChange={(isChecked) => handleChangeThird(6, isChecked)}
              />
            </div>
          </div> */}
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
            src="/assets/Survey/nextimg.svg"
            alt="img"
          />
        </button>
      </div>
    </div>
  );
}

export default Survey4;
