import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface TimeLineProps {
  imgSrc: string;
  title?: string;
  contents?: string;
  children?: ReactNode;
}

const TimeLine = ({ imgSrc, title, contents, children }: TimeLineProps) => {
  return (
    <div>
      <div className="relative w-full mt-5 h-80">
        <img src={imgSrc} alt="timeline" className="w-full h-80" />
        <section className="absolute top-[44%] left-[40%] text-center text-white">
          <p className="pb-10 text-6xl font-semibold">{title}</p>
          <p className="text-sm w-[300px]">{contents}</p>
          {children}
        </section>
      </div>
      <Outlet />
    </div>
  );
};

export default TimeLine;
