import { useState } from 'react';
import ShortMenu from './ShortMenu';

const WideMenu = () => {
  const [showClass, setShowClass] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <div className="w-64 border-r h-[286px] p-8">
          <p
            className="cursor-pointer font-semibold text-[rgb(26,26,26)] w-fit"
            onMouseEnter={() => setShowClass(false)}
          >
            올래 교육
          </p>
          <ul className="flex flex-col gap-3 font-medium text-[#666666] text-sm mt-8">
            <li
              className={`
              cursor-pointer w-fit hover:font-semibold hover:text-primary01
              ${showClass && 'text-primary01'}
            `}
              onMouseEnter={() => setShowClass(true)}
            >
              카테고리
            </li>
            <li className="cursor-pointer w-fit">인기 교육</li>
            <li className="cursor-pointer w-fit">지금 막 뜬 교육</li>
          </ul>
        </div>

        <div className="w-64 border-r h-[286px] p-8">
          <p className="cursor-pointer font-semibold text-[#1A1A1A] w-fit">
            소통하러 올래
          </p>
          <ul className="flex flex-col gap-3 font-medium text-[#666666] text-sm mt-8">
            <li className="cursor-pointer w-fit">궁금해요</li>
            <li className="cursor-pointer w-fit">같이해요</li>
          </ul>
        </div>

        <div className="w-64 border-r h-[286px] p-8">
          <p className="cursor-pointer font-semibold text-[#1A1A1A] w-fit">
            올래 생활뉴스
          </p>
          <ul className="flex flex-col gap-3 font-medium text-[#666666] text-sm mt-8">
            <li className="cursor-pointer w-fit">공지사항</li>
            <li className="cursor-pointer w-fit">건강정보</li>
            <li className="cursor-pointer w-fit">생활정보</li>
            <li className="cursor-pointer w-fit">취업정보</li>
          </ul>
        </div>

        <div className="w-64 border-r h-[286px] p-8">
          <p className="cursor-pointer font-semibold text-[#1A1A1A] w-fit">
            우리 동네 인기 선생님
          </p>
          <ul className="flex flex-col gap-3 font-medium text-[#666666] text-sm mt-8">
            <li className="cursor-pointer w-fit">카테고리</li>
            <li className="cursor-pointer w-fit">우리 동네 인기 선생님</li>
          </ul>
        </div>
      </div>

      <section
        className={`
      ${
        showClass
          ? 'bg-white w-[1025px] absolute top-28 h-72 z-20 border-t border-r'
          : 'hidden'
      }
    `}
        onMouseLeave={() => setShowClass(false)}
      >
        <ShortMenu setShowClass={setShowClass} />
      </section>
    </>
  );
};

export default WideMenu;
