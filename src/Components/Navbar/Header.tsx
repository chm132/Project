import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="mt-10 mb-6 px-28">
      <span className="flex items-center gap-4">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="object-cover w-20 h-8 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <section className="relative">
          <input
            className="px-4 py-2 border rounded-full outline-none text-primary01 border-primary01 w-[540px] placeholder-primary01"
            type="text"
            placeholder="배우고 싶은 분야가 있나요? 제목/강사명/수업 내용으로 검색해 보세요!"
          />
          <img
            src="/assets/Utils/search.svg"
            alt="search"
            className="absolute w-6 h-6 cursor-pointer right-4 top-2"
          />
        </section>
      </span>
      <span className="flex items-center justify-between mt-10">
        <ul className="flex items-center gap-8 text-xl font-semibold cursor-pointer">
          <li>올래 교육</li>
          <li>소통하러 올래</li>
          <li>올래 생활뉴스</li>
          <li>올래 선생님</li>
        </ul>
        <ul className="flex items-center gap-6 pl-24 font-medium text-lg text-[#666666]">
          <li className="cursor-pointer">비회원 신청내역</li>
          <Link to="/auth/login">
            <li className="">로그인</li>
          </Link>
          <Link to="/auth/join">
            <li className="cursor-pointer">회원가입</li>
          </Link>
        </ul>
      </span>
    </header>
  );
};

export default Header;
