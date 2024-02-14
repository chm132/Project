import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Timer } from './Timer';

const FirstArea = () => {
  const [phoneNum, setPhoneNum] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [showNext, setShowNext] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  // 인증번호 올바른지 validate 기능 향후 추가
  const authNumHandler = () => {
    setDisabled(false);
  };

  const nextHandler = () => {
    navigate('/auth/join/2');
  };

  return (
    <div className="mt-10 mb-48 px-96 ">
      <div className="my-5">
        <p className="font-medium">휴대폰 번호</p>
        <section className="flex items-center justify-between text-[#B3B3B3] h-12 mt-3">
          <input
            className="w-[70%] px-6 py-3 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3]"
            placeholder="-없이 숫자만 입력해주세요"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <button
            className={`font-medium ${
              phoneNum ? 'bg-primary01 text-white' : 'bg-[#E6E6E6]'
            } rounded-lg px-5 py-3 w-32 transition-all`}
            onClick={() => setShowNext(true)}
          >
            인증번호 전송
          </button>
        </section>
        {showNext && (
          <p className="text-sm font-medium text-[#B3B3B3] mt-2">
            인증번호가 전송되었습니다.
          </p>
        )}
      </div>

      {showNext && (
        <div className="mt-10 mb-20">
          <p className="font-medium">인증번호 입력</p>
          <section className="flex items-center justify-between text-[#B3B3B3] h-12 mt-3">
            <input
              className="w-[70%] px-6 py-3 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3]"
              placeholder="숫자 6자리를 입력해주세요"
              value={authNum}
              onChange={(e) => setAuthNum(e.target.value)}
            />
            <button
              className={`font-medium ${
                authNum ? 'bg-primary01 text-white' : 'bg-[#E6E6E6]'
              } rounded-lg px-5 py-3 w-32 transition-all`}
              onClick={authNumHandler}
            >
              확인
            </button>
          </section>
          <section
            className={`flex items-center ${
              !disabled ? 'justify-between' : 'justify-end'
            }  mt-2`}
          >
            {!disabled && (
              <p className="text-sm font-medium text-[#17784F]">
                인증이 완료되었습니다
              </p>
            )}
            <Timer />
          </section>
          <button
            className="w-full h-12 text-white rounded-[50px] bg-primary01 mt-20 font-semibold"
            disabled={disabled}
            onClick={nextHandler}
          >
            다음
          </button>
        </div>
      )}

      {/* <AuthModal
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
      /> */}
    </div>
  );
};

export default FirstArea;
