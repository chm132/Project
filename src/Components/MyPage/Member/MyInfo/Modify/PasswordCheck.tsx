import { useState } from 'react';

interface PasswordCheckProps {
  setPart: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordCheck = ({ setPart }: PasswordCheckProps) => {
  const [enteredPw, setEnteredPw] = useState('');

  const checkHandler = () => {
    if (enteredPw.length < 8) {
      // 비밀번호가 틀렸습니다 표시 부탁드립니다.
    }

    setPart('update');
  };

  return (
    <div className="mx-[340px] rounded-3xl shadow-md bg-white px-32 py-10 mt-20 relative">
      <section
        className="absolute flex items-center gap-2 cursor-pointer top-10 left-16"
        onClick={() => setPart('modify')}
      >
        <img src="/assets/MyPage/leftArrow.svg" alt="" />
        <p>내 정보 수정</p>
      </section>
      <div className="flex flex-col items-center justify-center gap-6 mb-5">
        <p className="text-2xl font-semibold">현재 비밀번호</p>
        <section className="relative mt-5">
          <input
            placeholder="현재 비밀번호를 입력해주세요"
            className="pl-12 py-4 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3] w-[500px] text-[#B3B3B3]"
            value={enteredPw}
            onChange={(e) => setEnteredPw(e.target.value)}
          />
          <img
            src="/assets/MyPage/enterPhone.svg"
            alt="icon"
            className="absolute left-4 top-4"
          />
        </section>
        <button
          className="text-white bg-primary01 rounded-[50px] w-[500px] font-semibold py-3"
          onClick={checkHandler}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PasswordCheck;
