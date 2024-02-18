import { Outlet } from 'react-router-dom';

const FloatingBanner = () => {
  return (
    <div>
      <div className="relative w-full mt-5 h-80">
        <img
          alt="임시 배너"
          src="/assets/Survey/FloatingBanner.svg"
          className="w-full h-80"
        />
        <section className="absolute top-[44%] left-[40%] text-center text-white">
          <p className="pb-10 text-6xl font-semibold">내용</p>
          <p className="text-sm w-[300px]">내용</p>
          내용
        </section>
      </div>
      <Outlet />
    </div>
  );
};

export default FloatingBanner;
