import { useState } from 'react';
import FloatingLabel from '../Input/FlotingLabel';
import { useNavigate } from 'react-router';

function Floating2() {
  const navigate = useNavigate();

  const [categoryClicked, setCategoryClicked] = useState<number | null>(null);

  const changeTag = (index: number) => {
    setCategoryClicked(index + 1); // 선택한 인덱스 + 1 설정
  };

  console.log(categoryClicked);

  const buttonList = [
    '스마트폰',
    '컴퓨터',
    '키오스크',
    '외국어',
    '운동',
    '공예',
    '부동산',
    '심리',
    '취업/창업',
    '요리',
    '악기',
    '자산',
  ];
  const nextHandler = () => {
    // 잠시 3번 뛰어넘기
    navigate('/floating?page=4', {
      state: {
        categoryId: categoryClicked,
      },
    });
  };

  return (
    <div>
      <div className="flex w-full survey h-4/6">
        <div className="box1 m-14">
          <div className="flex question">
            <p className=" text-[18px] font-semibold">
              1. 어떤 분야를 배우고 싶으세요?
            </p>
          </div>
          <div className="flex gap-10 mt-12 click">
            {buttonList.map((option, index) => (
              <FloatingLabel
                key={index}
                age={option}
                index={index} // 인덱스 값 전달
                onClick={changeTag}
                clicked={categoryClicked === index + 1} // 선택된 값 비교
              />
            ))}
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

export default Floating2;
