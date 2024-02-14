import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNonUser } from '../../../redux/slices/nonUserSlice';

const CheckPhone = () => {
  const [enteredPhone, setEnteredPhone] = useState('');
  const dispatch = useDispatch();

  const checkHandler = () => {
    if (enteredPhone.length > 0) {
      dispatch(setNonUser({ phoneNum: enteredPhone }));
    }
  };

  return (
    <div className="mx-[340px] rounded-3xl shadow-md bg-white px-32 py-10">
      <div className="flex flex-col items-center justify-center gap-6 mb-5">
        <p className="text-2xl font-semibold">비회원 정보 입력</p>
        <section className="relative mt-5">
          <input
            placeholder="휴대폰 번호 입력 (-없이 숫자만 입력)"
            className="pl-12 py-4 bg-[#F2F2F2] rounded-lg outline-none transition placeholder-[#B3B3B3] w-[500px] text-[#B3B3B3]"
            value={enteredPhone}
            onChange={(e) => setEnteredPhone(e.target.value)}
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

export default CheckPhone;
