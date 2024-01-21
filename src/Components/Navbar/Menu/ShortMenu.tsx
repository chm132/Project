interface ShortMenuProps {
  setShowClass: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortMenu = ({ setShowClass }: ShortMenuProps) => {
  return (
    <section
      className="grid w-[1120px] grid-cols-4 border-2 absolute top-[68px] left-2 bg-white"
      onMouseEnter={() => setShowClass(true)}
    >
      <ul className="flex flex-col items-center">
        <li className="w-40 py-2 text-lg text-center border-b-2 cursor-pointer border-b-black">
          디지털
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          스마트폰
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          컴퓨터
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          키오스크
        </li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="w-40 py-2 text-lg text-center border-b-2 cursor-pointer border-b-black">
          취미
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          공예
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          요리
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          운동
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          악기
        </li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="w-40 py-2 text-lg text-center border-b-2 cursor-pointer border-b-black">
          경제
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          자산
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          부동산
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          취업/창업
        </li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="w-40 py-2 text-lg text-center border-b-2 cursor-pointer border-b-black">
          라이프
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          외국어
        </li>
        <li className="py-3 my-2 cursor-pointer hover:bg-amber-900 hover:text-white hover:px-12">
          심리
        </li>
      </ul>
    </section>
  );
};

export default ShortMenu;
