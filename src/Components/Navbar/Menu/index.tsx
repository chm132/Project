import { useState } from 'react';
import WideMenu from './WideMenu';

const Menu = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <nav className="mb-8">
      <div onMouseEnter={() => setShowDetail(false)} className="h-1" />
      <hr />
      <ul
        className="flex items-center justify-around w-full gap-6 py-10 text-xl font-bold cursor-pointer"
        onMouseEnter={() => setShowDetail(true)}
      >
        <li>올래 교육</li>
        <li>소통하러 올래</li>
        <li>올래 생활뉴스</li>
        <li>올래 선생님</li>
      </ul>
      <hr />
      <section
        className={`
          ${
            showDetail
              ? 'grid w-full grid-cols-4 gap-20 px-2 text-lg font-semibold pr-5 relative'
              : 'hidden'
          }
        `}
        onMouseLeave={() => setShowDetail(false)}
      >
        <WideMenu />
      </section>
    </nav>
  );
};

export default Menu;
