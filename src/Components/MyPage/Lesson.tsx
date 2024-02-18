import { useNavigate } from 'react-router';
import { formatTime } from '../../utils/dayjs';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDeleteLessonMutation } from '../../redux/apis/guestApi';

interface LessonProps {
  id?: number;
  category: string;
  imgUrl?: string;
  status?: string;
  createdAt: string;
  title: string;
  place: string;
  startDate: string;
  startTime: string;
  endTime: string;
  teacher: string;
  hoverMessage: string;
}

const Lesson = ({
  id,
  category,
  imgUrl,
  status,
  createdAt,
  title,
  place,
  startDate,
  startTime,
  endTime,
  teacher,
  hoverMessage,
}: LessonProps) => {
  // 유저가 로그인을 했는지 ?
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.isLoggedIn,
  );
  // 현재 마이페이지 들어와있는 비회원의 전화번호
  const phoneNum = useSelector((state: RootState) => state.nonUser.phoneNum);
  const [deleteLesson] = useDeleteLessonMutation();
  const navigate = useNavigate();

  const renderCategoryInEng = (category: string) => {
    switch (category) {
      case '스마트폰':
        return 'smartPhone';
      case '키오스크':
        return 'kiosk';

      default:
        return category;
    }
  };

  const deleteLessonHandler = () => {
    if (currentUser) {
      // 로그인한 회원 수업 취소 로직
    } else {
      deleteLesson({
        phoneNum,
        lessonId: id,
      });
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-4">
        <section className="flex items-center justify-center w-16 h-16 rounded-full bg-primary01">
          <img
            src={`/assets/Category/${renderCategoryInEng(category)}.svg`}
            alt="category"
            className="w-10 h-10"
          />
        </section>
        <section>
          <section className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-xl text-[#333333]">{category}</p>
            {status && (
              <span className="bg-white rounded-[32px] py-2 px-3">
                <p
                  className={`text-sm font-semibold ${
                    status === 'REVIEWING' ? 'text-primary01' : 'text-[#17784F]'
                  }`}
                >
                  {status === 'REVIEWING' ? '승인 대기' : '신청 완료'}
                </p>
              </span>
            )}
          </section>
          <p className="font-medium text-[#808080]">
            <span>{formatTime(createdAt, 'YYYY.MM.DD')}</span>
            <span className="pl-3">{formatTime(createdAt, 'A h:mm')}</span>
          </p>
        </section>
      </div>

      <img
        src="/assets/MyPage/line.svg"
        alt="line"
        className="absolute left-8 top-[65px]"
      />

      <div className="flex items-start w-full h-40 mt-5 bg-white shadow-lg cursor-pointer rounded-3xl">
        <img
          src={imgUrl}
          alt=""
          className="h-40 w-52 rounded-l-3xl"
          onClick={() => navigate(`/lesson?lessonId=${id}`)}
        />
        <section className="flex flex-col w-full gap-2 px-6 py-5">
          <p className="font-semibold text-lg text-[#333333]">{title}</p>
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/place.svg" alt="place" />
            <p className="font-medium text-[#808080]">{place}</p>
          </section>
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/date.svg" alt="date" />
            <p className="font-medium text-[#808080]">
              {formatTime(startTime, 'YYYY.MM.DD (ddd) A h:mm')} ~{' '}
              {formatTime(endTime, 'A h:mm')}
            </p>
          </section>
          <section className="flex items-center justify-between mt-2">
            <section className="flex items-center gap-2">
              <img
                src="/assets/Teacher/teacher1.png"
                alt="teacher"
                className="w-6 h-6"
              />
              <p className="font-medium text-sm text-[#666666]">{teacher}</p>
            </section>

            <span className="bg-[#F2F2F2] rounded-[32px] flex items-center gap-2 py-2 px-4 absolute bottom-5 right-6 cursor-pointer">
              <img src="/assets/MyPage/close.svg" alt="close" />
              <p
                className="font-medium text-sm text-[#666666] cursor-pointer"
                onClick={deleteLessonHandler}
              >
                {hoverMessage}
              </p>
            </span>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Lesson;
