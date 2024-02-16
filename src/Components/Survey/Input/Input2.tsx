interface InputProps2 {
  question: string;
  onClick?: any;
  clicked: boolean;
}

const Input2 = ({ question, onClick, clicked }: InputProps2) => {
  return (
    <div
      className={`hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]
      ${
        !clicked
          ? 'hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]'
          : 'bg-primary01 text-white flex justify-between px-3 py-3 rounded-2xl border mt-[10px] w-[384px] h-[49px] text-[14px]'
      }`}
      onClick={onClick}
    >
      <p>{question}</p>
      <img src="/assets/Survey/checkimg.svg" alt="img" />
    </div>
  );
};

export default Input2;

// 단수 선택 박스
