import React from 'react';

export default function Apply() {
  return (
    <div>
      <div className="1 h-[21px] text-[18px] text-[#666666] p-8 font-medium">
        김강사
      </div>
      <div className="2 w-[306px] h-[72px] font-semibold m-auto text-[21px] text-[#1A1A1A] leading-[36px] mt-4">
        K 강사가 알려주는 스마트한 디지털 활용(스마트폰 초급)
      </div>
      <div className="3 w-[306px] h-[122px] m-8">
        <div className="4 w-full h-9 flex justify-between items-center">
          <div className="5 w-[100px] h-[19px] text-[#999999] text-[16px]">
            수강료
          </div>
          <div className="6 font-semibold text-[24px] text-primary01">
            10,000원
          </div>
        </div>

        <div className="7 w-full h-[19px] mt-6 flex justify-between items-center">
          <div className="8 w-[100px] h-full text-[#999999] text-[16px]">
            모집 기간
          </div>
          <div className="9 w-[250px] h-full font-medium text-right">
            2023.12.04 ~ 2023.12.15
          </div>
        </div>

        <div className="10 w-full h-[19px] mt-6 flex justify-between items-center">
          <div className="11 w-[100px] h-full text-[#999999] text-[16px]">
            모집 인원
          </div>
          <div className="12 w-[250px] h-full font-medium text-right whitespace-nowrap">
            <p className="inline font-medium text-[#333333]">10</p> /{' '}
            <p className="inline text-[#666666]">20명</p>
          </div>
        </div>
      </div>
      <button className=" w-[306px] h-[51px] rounded-[50px] ml-8 mt-8 mb-4 font-semibold  bg-primary01 text-[#FFFFFF]">
        신청하기
      </button>
      <button className=" w-[306px] h-[51px] rounded-[50px] ml-8 mb-[62px] bg-[#FFFFFF] font-semibold text-[#666666] border-[2px]">
        찜하기
      </button>
      <div className=" w-[322px] border-[1px] rounded-3xl m-auto mb-8"></div>
      <button className="flex items-center w-[306px] h-[51px] rounded-[50px] ml-8 mb-[17px] bg-[#FFEB00] font-semibold text-[#3C1E1E]">
        <img
          src="/assets/Leasson/kakao.svg"
          alt="kakao"
          className=" ml-[55px] mr-2"
        ></img>
        카카오톡으로 공유하기
      </button>
      <button className="flex items-center w-[306px] h-[51px] rounded-[50px] ml-8 mb-[62px] bg-[#25CA33] font-semibold text-[#FFFFFF]">
        <img
          src="/assets/Leasson/band.svg"
          alt="kakao"
          className=" ml-[85px] mr-2"
        ></img>
        밴드로 공유하기
      </button>
    </div>
  );
}
