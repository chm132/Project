import { useState } from 'react';
import ShortMenu from './ShortMenu';

const WideMenu = () => {
  const [showClass, setShowClass] = useState(false);

  return (
    <>
      <ul
        className="flex flex-col items-center"
        onMouseLeave={() => setShowClass(false)}
      >
        <li
          className={`
            w-full py-5 text-center cursor-pointer 
            ${showClass && 'bg-amber-900'} 
            ${showClass && 'text-white'}
          `}
          onMouseEnter={() => setShowClass(true)}
        >
          카테고리
        </li>
        <li className="py-5 cursor-pointer">인기교육</li>
        <li className="py-5 cursor-pointer">지금 막 뜬 교육</li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="py-5 cursor-pointer">궁금해요</li>
        <li className="py-5 cursor-pointer">같이해요</li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="py-5 cursor-pointer">공지사항</li>
        <li className="py-5 cursor-pointer">건강정보</li>
        <li className="py-5 cursor-pointer">생활정보</li>
        <li className="py-5 cursor-pointer">취업정보</li>
      </ul>
      <ul className="flex flex-col items-center">
        <li className="py-5 cursor-pointer">카테고리</li>
        <li className="py-5 cursor-pointer">우리 동네 인기 선생님</li>
      </ul>
      {showClass && (
        <div onMouseLeave={() => setShowClass(false)}>
          <ShortMenu setShowClass={setShowClass} />
        </div>
      )}
    </>
  );
};

export default WideMenu;
