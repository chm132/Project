interface ShortMenuProps {
  setShowClass: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortMenu = ({ setShowClass }: ShortMenuProps) => {
  return (
    <div className="flex flex-col items-center">
      <section className="bg-[#E6E6E6] font-medium text-[#808080] flex items-center py-5 overflow-hidden">
        <p className="w-64 pl-12">디지털</p>
        <p className="w-64 pl-12">취미</p>
        <p className="w-64 pl-12">경제</p>
        <p className="w-64 pl-12">라이프</p>
      </section>

      <section className="flex items-center">
        <div className="w-64 pl-12 border-r h-[220px]">
          <ul className="font-medium text-sm text-[#666666] flex flex-col gap-6 py-6">
            <li className="cursor-pointer hover:text-primary01 w-fit">
              스마트폰
            </li>
            <li className="cursor-pointer hover:text-primary01 w-fit">
              컴퓨터
            </li>
            <li className="cursor-pointer hover:text-primary01 w-fit">
              키오스크
            </li>
          </ul>
        </div>

        <div className="w-64 pl-12 border-r h-[220px]">
          <ul className="font-medium text-sm text-[#666666] flex flex-col gap-6 py-6">
            <li className="cursor-pointer hover:text-primary01 w-fit">공예</li>
            <li className="cursor-pointer hover:text-primary01 w-fit">요리</li>
            <li className="cursor-pointer hover:text-primary01 w-fit">운동</li>
            <li className="cursor-pointer hover:text-primary01 w-fit">악기</li>
          </ul>
        </div>

        <div className="w-64 pl-12 border-r h-[220px]">
          <ul className="font-medium text-sm text-[#666666] flex flex-col gap-6 py-6">
            <li className="cursor-pointer hover:text-primary01 w-fit">자산</li>
            <li className="cursor-pointer hover:text-primary01 w-fit">
              부동산
            </li>
            <li className="cursor-pointer hover:text-primary01 w-fit">
              취업/창업
            </li>
          </ul>
        </div>

        <div className="w-64 pl-12 h-[220px]">
          <ul className="font-medium text-sm text-[#666666] flex flex-col gap-6 py-6">
            <li className="cursor-pointer hover:text-primary01 w-fit">
              외국어
            </li>
            <li className="cursor-pointer hover:text-primary01 w-fit">심리</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ShortMenu;
