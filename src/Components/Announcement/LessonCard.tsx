import { useNavigate } from 'react-router-dom';
import { formatTime } from '../../utils/dayjs';

interface LessonCardProps {
  id: number;
  img: string;
  title: string;
  endDate: string;
  startDate: string;
  endTime: string;
  startTime: string;
}

const LessonCard = ({
  id,
  img,
  title,
  endDate,
  startDate,
  endTime,
  startTime,
}: LessonCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-64 border-2 rounded-[18px] shadow-lg cursor-pointer hover:scale-105 hover:ease-in-out transition-all"
      onClick={() => navigate(`/lesson?lessonId=${id}`)}
    >
      <img
        src={img}
        alt="lesson-img"
        className="object-cover w-64 h-64 rounded-t-[18px]"
      />
      <section className="w-full p-4">
        <p className="mb-2">{title}</p>
        <p className="text-sm font-medium text-[#666666] mb-2">
          {formatTime(startDate, 'YYYY.MM.DD (ddd)')} ~{' '}
          {formatTime(endDate, 'MM.DD (ddd)')}
        </p>
        {/* 얜 걍 하드코딩해야겠다 */}
        <p className="text-sm font-medium text-[#666666]">
          10:00 ~ 12:00 (2시간)
        </p>
      </section>
      <span className="absolute right-0 flex items-center justify-center w-16 h-8 rounded-tl-lg top-56 bg-primary01">
        <p className="text-sm font-semibold text-white">4일 남음</p>
      </span>
    </div>
  );
};

export default LessonCard;
