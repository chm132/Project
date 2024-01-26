import { Outlet } from 'react-router-dom';

interface TimeLineProps {
  imgSrc: string;
  title: string;
}

const TimeLine = ({ imgSrc, title }: TimeLineProps) => {
  return (
    <div>
      <div className="relative mt-5">
        <img src={imgSrc} alt="timeline" />
        <p className="absolute top-[30%] left-[42%] font-bold text-3xl border-b-4 border-b-black">
          {title}
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default TimeLine;
