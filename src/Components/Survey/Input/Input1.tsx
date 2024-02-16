interface InputProps1 {
  question: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Input1 = ({ question, isChecked, onChange }: InputProps1) => {
  return (
    <div
      className={`${
        !isChecked
          ? 'hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]'
          : ' bg-primary01 text-white flex justify-between px-3 py-3 rounded-2xl border mt-[10px] w-[384px] h-[49px] text-[14px]'
      }`}
      onClick={() => onChange(!isChecked)}
    >
      <p>{question}</p>

      <img
        className={`${!isChecked ? 'hidden' : ''}`}
        src="/assets/Survey/checkimg.svg"
        alt="img"
      />
    </div>
  );
};

export default Input1;

// 복수 선택 가능한 박스
