import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../AuthModal';

const FirstArea = () => {
  const navigate = useNavigate();

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAuthModal2, setShowAuthModal2] = useState(false);

  const [showAuthNum, setShowAuthNum] = useState(false);

  const modalCloseHandler = () => {
    setShowAuthModal(false); // 첫번째 모달 닫기
    setShowAuthNum(true); // 인증번호 적는란 나오기
  };

  const nextHandler = () => {
    navigate('/auth/join/2');
  };

  return (
    <div className="mt-10 px-36">
      <section className="flex items-center justify-between my-10">
        <p className="text-lg font-bold">휴대폰 번호</p>
        <span className="flex items-center gap-2">
          <input
            className="px-8 py-4 font-medium bg-white rounded-[20px] border-2 outline-none transition w-[440px]"
            type="number"
            placeholder="-없이 숫자만 입력해 주세요"
          />
          <button
            className="py-4 px-12 transition bg-auth-color border-auth-color rounded-[20px] hover:opacity-80 text-white font-bold text-lg"
            onClick={() => setShowAuthModal(true)}
          >
            인증번호받기
          </button>
        </span>
      </section>
      <section className="flex items-center justify-between mt-10 mb-64">
        {showAuthNum ? (
          <>
            <p className="text-lg font-bold">인증번호입력</p>
            <span className="flex items-center gap-2">
              <input
                className="px-8 py-4 font-medium bg-white rounded-[20px] border-2 outline-none transition w-[440px]"
                type="number"
                placeholder="숫자 6자리를 입력해 주세요"
              />
              <button
                className="py-4 px-12 transition bg-auth-color border-auth-color rounded-[20px] hover:opacity-80 text-white font-bold text-lg"
                onClick={() => setShowAuthModal2(true)}
              >
                인증번호확인
              </button>
            </span>
          </>
        ) : (
          <div />
        )}
      </section>
      <AuthModal
        showAuthModal={showAuthModal}
        setShowAuthModal={setShowAuthModal}
        modalCheckHandler={modalCloseHandler}
        step={1}
      />
      <AuthModal
        showAuthModal={showAuthModal2}
        setShowAuthModal={setShowAuthModal2}
        modalCheckHandler={nextHandler}
        step={2}
      />
    </div>
  );
};

export default FirstArea;
