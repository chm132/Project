interface LabelProps {
  content: string;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}

const Label1 = ({ content, isChecked, onChange }: LabelProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[#666666]">{content}</p>
      <div
        className={`${
          !isChecked
            ? 'hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
            : 'bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
        }`}
        onClick={() => onChange(!isChecked)}
      >
        <img src="/assets/Survey/labelcheck.svg" alt="img" />
      </div>
    </div>
  );
};

export default Label1;

// 복수 선택 가능한 라벨
