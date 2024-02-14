import { useState } from 'react';

interface LabelProps3 {
  age: any;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

const Label3 = ({ age, className, onClick, clicked }: LabelProps3) => {
  return (
    <div className="flex items-center flex-col gap-2">
      <p className="text-[#666666]">{age}대</p>
      <div
        className={`hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center
        ${className} ${
          !clicked
            ? 'hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
            : 'bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
        }`}
        onClick={onClick}
      >
        <img src="/assets/Survey/labelcheck.svg"></img>
      </div>
    </div>
  );
};

export default Label3;

// 단수 선택 박스
