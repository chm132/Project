import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const FilterBox = () => {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-between w-full h-20 text-center px-36">
      <ul className="grid grid-cols-3 font-medium">
        <li className="flex items-center justify-center w-40 gap-1 text-gray-500 cursor-pointer">
          <p>필터 1</p>
          <MdKeyboardArrowRight size={24} />
        </li>
        <li className="flex items-center justify-center w-40 gap-1 text-gray-500 cursor-pointer">
          <p>필터 2</p>
          <MdKeyboardArrowRight size={24} />
        </li>
        <li
          className="w-40 border py-[26px] text-primary01 border-primary01 cursor-pointer"
          onClick={() => navigate('survey')}
        >
          딱 맞는 교육 찾기
        </li>
      </ul>
      <input
        className="w-2/5 p-4 rounded-[16px] bg-[#F2F2F2] placeholder-[#B3B3B3] text-sm outline-none border
        focus:border-primary01 focus:bg-transparent"
        placeholder="배우고 싶은 분야가 있나요? 여기에 검색해 보세요!"
      />
    </section>
  );
};

export default FilterBox;
