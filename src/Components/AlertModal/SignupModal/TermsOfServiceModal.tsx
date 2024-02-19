// Wireframe 109

import React from 'react';

export default function TermsOfServiceModal() {
  return (
    <div className=" w-[640px] h-[198px] bg-[#FFFFFF] rounded-3xl">
      <div className=" flex ">
        <button className=" ml-auto m-6 mb-6">
          <img alt="closeModal" src="/assets/Modal/modalClose.svg"></img>
        </button>
      </div>
      <div className=" font-semibold text-[32px] text-center">
        이용약관에 동의해주세요.
      </div>
    </div>
  );
}