import { useState } from 'react';

interface LabelProps2 {
  content: string;
}

const Label2 = ({ content }: LabelProps2) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <div className="flex items-center flex-col gap-2">
      <p className="text-[#666666]">{content}</p>
      <div
        className={`${
          !clicked
            ? 'hover:bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
            : 'bg-primary01 border w-10 h-10 rounded-xl border-primary01 flex justify-center'
        }`}
        onClick={() => onClick()}
      >
        <img src="/assets/Survey/labelcheck.svg"></img>
      </div>
    </div>
  );
};

export default Label2;

// 요일
