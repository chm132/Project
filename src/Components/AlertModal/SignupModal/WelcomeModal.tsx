// Wirefram110

import React from 'react';

export default function WelcomeModal() {
  return (
    <div className=" w-[640px] h-[198px] bg-[#FFFFFF] rounded-3xl">
      <div className=" flex ">
        <button className=" ml-auto m-6 mb-1">
          <img alt="closeModal" src="/assets/Modal/modalClose.svg"></img>
        </button>
      </div>
      <div className=" font-medium text-[20px] text-[#666666] text-center">
        회원가입이 완료되었습니다.
      </div>
      <div className=" font-semibold text-[32px] text-center">
        반가워요, 홍길동님!
      </div>
    </div>
  );
}