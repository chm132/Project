import { useState } from 'react';

interface InputProps1 {
  question: string;
}

const Input1 = ({ question }: InputProps1) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <div
      className={`${
        !clicked
          ? 'hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]'
          : ' bg-primary01 text-white flex justify-between px-3 py-3 rounded-2xl border mt-[10px] w-[384px] h-[49px] text-[14px]'
      }`}
      onClick={() => onClick()}
    >
      <p>{question}</p>

      <img
        className={`${!clicked ? 'hidden' : ''}`}
        src="/assets/Survey/checkimg.svg"
      ></img>
    </div>
  );
};

export default Input1;

// 복수 선택 가능한 박스
