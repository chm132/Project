import { useState } from 'react';
import { usePatchPasswordMutation } from '../../../../../redux/apis/myPageApi';

interface PasswordUpdateProps {
  setPart: React.Dispatch<React.SetStateAction<string>>;
}

const PasswordUpdate = ({ setPart }: PasswordUpdateProps) => {
  const [patchPassword] = usePatchPasswordMutation();

  const [newPassword, setNewPassword] = useState('');

  const [newPasswordCheck, setNewPasswordCheck] = useState('');

  const checkHandler = async () => {
    if (newPassword !== newPasswordCheck) {
      // 임시방편입니다
      alert('비밀번호가 틀려요!');
    } else {
      const response = await patchPassword({ password: newPassword });
      if (response) {
        setPart('modify');
      }
    }
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
        <p className="text-2xl font-semibold">새 비밀번호 입력</p>
        <section className="relative mt-5">
          <input
            placeholder="영문, 숫자, 특수기호 포함 8글자 이상으로 설정해 주세요."
            className="pl-12 py-4 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3] w-[500px] text-[#B3B3B3]"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <img
            src="/assets/MyPage/enterPhone.svg"
            alt="icon"
            className="absolute left-4 top-4"
          />
        </section>

        <p className="text-2xl font-semibold">새 비밀번호 확인</p>
        <section className="relative mt-5">
          <input
            placeholder="비밀번호를 한번 더 입력해주세요."
            className="pl-12 py-4 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3] w-[500px] text-[#B3B3B3]"
            value={newPasswordCheck}
            onChange={(e) => setNewPasswordCheck(e.target.value)}
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

export default PasswordUpdate;
