import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="">
      <ul className="flex items-center justify-end gap-4 py-2 pr-4 text-sm font-semibold bg-header-color">
        <li className="cursor-pointer hover:opacity-50">부패/공익신고센터</li>
        <li className="cursor-pointer hover:opacity-50">자주하는 질문</li>
        <li className="cursor-pointer hover:opacity-50">
          올래 사용이 어렵다면?
        </li>
      </ul>
      <span className="flex items-center justify-between pl-4 pr-6">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="object-cover w-48 cursor-pointer h-36"
          onClick={() => navigate('/')}
        />

        <ul className="flex items-center gap-6 pl-24 mt-10 font-bold">
          <li className="text-black cursor-pointer hover:opacity-50">
            비회원 신청내역
          </li>
          <Link to="/auth/login">
            <li className="flex items-center gap-1 text-black cursor-pointer hover:opacity-50">
              <img
                src="/assets/Header/login.png"
                alt="login-img"
                className="w-5 h-5"
              />
              로그인
            </li>
          </Link>
          <Link to="/auth/join">
            <li className="flex items-center gap-1 text-black cursor-pointer hover:opacity-50">
              <img
                src="/assets/Header/join.png"
                alt="join-img"
                className="w-5 h-5"
              />
              회원가입
            </li>
          </Link>
          <li className="cursor-pointer hover:opacity-50 text-slate-400">
            기관/선생님 신청
          </li>
        </ul>
      </span>
    </header>
  );
};

export default Header;
