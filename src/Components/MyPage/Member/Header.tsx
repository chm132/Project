import { Link } from 'react-router-dom';

interface HeaderProps {
  step: number;
}

const Header = ({ step }: HeaderProps) => {
  return (
    <section className="h-20 px-[340px] bg-white">
      <ul className="grid grid-cols-4 text-lg text-center font-meduim">
        <Link to="/mypage/1">
          <li
            className={`
            ${step === 1 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            내 정보
          </li>
        </Link>

        <Link to="/mypage/2">
          <li
            className={`
            ${step === 2 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            수업 신청 이력
          </li>
        </Link>

        <Link to="/mypage/3">
          <li
            className={`
            ${step === 3 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            수업 수강 이력
          </li>
        </Link>

        <Link to="/mypage/4">
          <li
            className={`
            ${step === 4 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            찜한 수업
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
