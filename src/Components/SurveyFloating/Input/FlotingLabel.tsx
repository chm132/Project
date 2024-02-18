interface FloatingLabelProps {
  age: any;
  index: number; // 인덱스 값 추가
  className?: string;
  onClick?: (index: number) => void;
  clicked?: boolean;
}

const FloatingLabel = ({
  age,
  index,
  className,
  onClick,
  clicked,
}: FloatingLabelProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[#666666]">{age}</p>
      <div
        className={`hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center
        ${className} ${
          !clicked
            ? 'hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
            : 'bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
        }`}
        onClick={() => onClick && onClick(index)} // 클릭 이벤트 핸들러 수정
      >
        <img alt="whitebox" src="/assets/Survey/labelcheck.svg"></img>
      </div>
    </div>
  );
};

export default FloatingLabel;
