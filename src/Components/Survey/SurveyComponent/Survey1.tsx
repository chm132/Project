interface Survey1Props {
  onNextButtonClick: (nextStep: number) => void;
}

function Survey1({ onNextButtonClick }: Survey1Props) {
  const handleButtonClick = () => {
    // Survey1에서 버튼이 클릭되면 SurveyPage의 onNextButtonClick 함수를 호출하여 step을 변경
    onNextButtonClick(2);
  };
  return (
    <div className={`relative top-[158px] left-[326px] `}>
      <p className=" text-[32px] font-semibold text-center">
        고객님께 딱 맞는 교육을 찾아드릴게요!
      </p>
      <p className=" text-[24px] text-center">몇 가지만 답해주세요.</p>
      <button
        onClick={handleButtonClick}
        className=" hover:opacity-80 relative top-[36px] left-[130px] w-[271px] h-[51px] bg-primary01 rounded-[50px] text-white flex justify-center py-3"
      >
        <p className="font-medium">설문 시작하기</p>
        <img
          className="px-1 py-1 "
          src="/assets/Survey/nextimg.svg"
          alt="img"
        />
      </button>
    </div>
  );
}

export default Survey1;
