import { useState } from 'react';

const FloatingButton = () => {
  const [firstHover, setFirstHover] = useState(false);
  const [secondHover, setSecondHover] = useState(false);
  return (
    <section className="fixed w-20 h-40 rounded-lg right-[120px] bottom-5 bg-[#333333] z-40 font-semibold text-[#999999] text-xs text-center">
      <span className="flex flex-col items-center px-4 py-2 transition-all cursor-pointer h-1/2">
        <svg
          onMouseEnter={() => setFirstHover(true)}
          onMouseLeave={() => setFirstHover(false)}
          className="w-8 h-8 hover:stroke-[#FFFFFF] stroke-[#999999] cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6663 24.6667L27.9997 28M5.33301 8H26.6663M5.33301 16H10.6663M5.33301 24H10.6663M14.6663 20C14.6663 21.4145 15.2282 22.771 16.2284 23.7712C17.2286 24.7714 18.5852 25.3333 19.9997 25.3333C21.4142 25.3333 22.7707 24.7714 23.7709 23.7712C24.7711 22.771 25.333 21.4145 25.333 20C25.333 18.5855 24.7711 17.229 23.7709 16.2288C22.7707 15.2286 21.4142 14.6667 19.9997 14.6667C18.5852 14.6667 17.2286 15.2286 16.2284 16.2288C15.2282 17.229 14.6663 18.5855 14.6663 20Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p className={`h-7 ${firstHover && 'text-[#FFFFFF]'}`}>
          <span className="block">딱 맞는</span>{' '}
          <span className="block">교육 찾기</span>
        </p>
      </span>
      <span className="flex flex-col items-center justify-center px-4 transition-all cursor-pointer h-1/2">
        <svg
          onMouseEnter={() => setSecondHover(true)}
          onMouseLeave={() => setSecondHover(false)}
          className="w-8 h-8 ml-1 hover:stroke-[#FFFFFF] stroke-[#999999] cursor-pointer"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.66667 7.99967H18.3333M7.66667 13.333H15.6667M15.6667 19.9997H14.3333L7.66667 23.9997V19.9997H5C3.93913 19.9997 2.92172 19.5782 2.17157 18.8281C1.42143 18.078 1 17.0605 1 15.9997V5.33301C1 4.27214 1.42143 3.25473 2.17157 2.50458C2.92172 1.75444 3.93913 1.33301 5 1.33301H21C22.0609 1.33301 23.0783 1.75444 23.8284 2.50458C24.5786 3.25473 25 4.27214 25 5.33301V11.333M22.3333 25.333V25.3463M22.3333 21.333C22.9311 21.3311 23.5109 21.1287 23.98 20.7583C24.4491 20.3878 24.7803 19.8707 24.9207 19.2897C25.0612 18.7087 25.0026 18.0974 24.7544 17.5536C24.5063 17.0098 24.0829 16.565 23.552 16.2903C23.0216 16.0186 22.4148 15.9344 21.8304 16.0513C21.246 16.1682 20.7184 16.4795 20.3333 16.9343"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={`${secondHover && 'text-[#FFFFFF]'}`}>1:1 상담</p>
      </span>
    </section>
  );
};

export default FloatingButton;
