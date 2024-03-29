import { Link } from 'react-router-dom';
// import {
//   useGetCompletedLessonsMutation,
//   useGetLessonsMutation,
// } from '../../../redux/apis/guestApi';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../redux/store';

interface HeaderProps {
  step: number;
}

const Header = ({ step }: HeaderProps) => {
  // const phoneNum = useSelector((state: RootState) => state.nonUser.phoneNum);
  // const [getLessons, lessonResults] = useGetLessonsMutation();
  // const [getCompletedLessons, completedLessonsResults] =
  //   useGetCompletedLessonsMutation();

  return (
    <section className="h-20 px-[530px] bg-white">
      <ul className="grid items-center grid-cols-2 text-lg text-center font-meduim">
        <Link to="/mypage/1">
          <li
            className={`
            ${step === 1 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            수업 신청 이력
          </li>
        </Link>

        <Link to="/mypage/2">
          <li
            className={`
            ${step === 2 && 'bg-primary01 text-white font-semibold'}
            w-48 py-[26px] cursor-pointer hover:bg-primary01 hover:text-white hover:font-semibold transition-all
          `}
          >
            수업 수강 이력
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Header;
