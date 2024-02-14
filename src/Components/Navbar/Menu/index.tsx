import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Link } from 'react-router-dom';
import { useLogout } from '../../../hooks/Auth/useLogout';
import { useState } from 'react';
import WideMenu from './WideMenu';

const Menu = () => {
  const userName = useSelector((state: RootState) => state.currentUser.name);
  const { signOut } = useLogout();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <span
        className="flex items-center justify-between pt-10"
        onMouseEnter={() => setShowMenu(false)}
      >
        <ul
          className="flex items-center gap-8 text-xl font-semibold"
          onMouseEnter={() => setShowMenu(true)}
        >
          <li
            className={`cursor-pointer hover:text-primary01 ${
              showMenu && 'text-primary01'
            }`}
          >
            올래 교육
          </li>
          <li className="cursor-pointer hover:text-primary01">소통하러 올래</li>
          <li className="cursor-pointer hover:text-primary01">올래 생활뉴스</li>
          <li className="cursor-pointer hover:text-primary01">
            우리 동네 인기 선생님
          </li>
        </ul>
        <ul className="flex items-center gap-6 pl-24 font-medium  text-[#666666]">
          {userName ? (
            <>
              <li className="flex items-center gap-1">
                <img
                  src="/assets/Utils/dummyProfile.png"
                  alt="profile"
                  className="w-5 h-5 rounded-full"
                />
                <p>{userName}</p>
              </li>
              <Link to="/mypage/1">
                <li className="cursor-pointer">마이페이지</li>
              </Link>
              <li className="cursor-pointer" onClick={() => signOut()}>
                로그아웃
              </li>
            </>
          ) : (
            <>
              <Link to="/mypage/1">
                <li className="cursor-pointer">비회원 신청내역</li>
              </Link>
              <Link to="/auth/login">
                <li className="cursor-pointer">로그인</li>
              </Link>
              <Link to="/auth/join/1">
                <li className="cursor-pointer">회원가입</li>
              </Link>
            </>
          )}
        </ul>
      </span>
      <section
        className={`
      ${
        showMenu
          ? 'bg-white w-screen absolute top-[92px] h-72 z-20 border-t'
          : 'hidden'
      }
    `}
        onMouseLeave={() => setShowMenu(false)}
      >
        <WideMenu />
      </section>
      {showMenu && (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30"></div>
      )}
    </div>
  );
};

export default Menu;
