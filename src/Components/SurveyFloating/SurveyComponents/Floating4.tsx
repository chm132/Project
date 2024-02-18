import { useState } from 'react';
import Input1 from '../../Survey/Input/Input1';
import { useLocation, useNavigate } from 'react-router';
import { useGetSubCategoriesQuery } from '../../../redux/apis/surveyApi';
import { useDispatch } from 'react-redux';
import { setSurveyOne } from '../../../redux/slices/surveySlice';

function Floating4() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryId = useLocation().state.categoryId;

  const [isCheckedMulti, setIsCheckedMulti] = useState([false, false]);

  const handleChangeMulti = (index: number, isChecked: boolean) => {
    const updatedArray = [...isCheckedMulti];
    updatedArray[index] = isChecked;
    setIsCheckedMulti(updatedArray);
  };

  const { data, isLoading, error } = useGetSubCategoriesQuery(categoryId);

  let content;

  if (isLoading) {
    content = <p>응답 대기중...</p>;
  }

  if (error) {
    content = <p>Network Error...</p>;
  }

  const isClickedSub: number[] = [];

  const isClickedSubHandler = (num: number) => {
    if (isClickedSub.includes(num)) {
      // num이 이미 배열에 존재하는 경우, 해당 요소를 제거합니다.
      const index = isClickedSub.indexOf(num);
      if (index !== -1) {
        isClickedSub.splice(index, 1);
        console.log('삭제완료', isClickedSub);
      }
    } else {
      // num이 배열에 존재하지 않는 경우, 해당 요소를 배열에 추가합니다.
      isClickedSub.push(num);
      console.log('추가완료', isClickedSub);
    }
  };

  if (data) {
    content = (
      <>
        {data.result.map((d) => (
          <div
            key={d.sub_categoryId}
            className={`${
              isClickedSub.includes(d.sub_categoryId)
                ? 'bg-primary01 text-white flex justify-between px-3 py-3 rounded-2xl border mt-[10px] w-[384px] h-[49px] text-[14px]'
                : 'hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]'
            }
          `}
            onClick={() => isClickedSubHandler(d.sub_categoryId)}
          >
            {d.name}
          </div>
        ))}
      </>
    );
  }

  const nextHandler = () => {
    dispatch(
      setSurveyOne({
        sub_categoryIds: [1],
        classType: isCheckedMulti
          .map((value, index) => (value ? index + 1 : null))
          .filter((value): value is number => value !== null),
      }),
    );
    navigate('/floating?page=5');
  };

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              3. 어떤 것을 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="mt-6 click">{content}</div>
        </div>
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              4. 어떻게 배우고 싶으세요?
            </p>
            <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
              복수 응답 가능
            </p>
          </div>
          <div className="mt-6 click">
            <Input1
              question="교육기관 방문"
              isChecked={isCheckedMulti[0]}
              onChange={(isChecked) => handleChangeMulti(0, isChecked)}
            />
            <Input1
              question="우리 집으로 선생님 방문"
              isChecked={isCheckedMulti[1]}
              onChange={(isChecked) => handleChangeMulti(1, isChecked)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={nextHandler}
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

export default Floating4;
