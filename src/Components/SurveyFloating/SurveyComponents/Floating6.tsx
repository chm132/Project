import { useState } from 'react';
import { transValue } from '../../../utils/transValue';
import { useDispatch } from 'react-redux';
import Input1 from '../../Survey/Input/Input1';
import { useNavigate } from 'react-router';
import { setSurveyThird } from '../../../redux/slices/surveySlice';

function Floating6() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const nextHandler = () => {
    navigate('/floating?page=7');
  };
  const prevHandler = () => {
    navigate('/floating?page=5');
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
              7. 수업이 가능한 시간대는 언젠가요?
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
        </div>
      </div>
      <div className="flex button">
        <button
          className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
          onClick={prevHandler}
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
          onClick={nextHandler}
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

export default Floating6;
