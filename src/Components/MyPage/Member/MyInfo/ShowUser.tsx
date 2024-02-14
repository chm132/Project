import { useState } from 'react';
import { Toggle } from './Toggle';
import { formatPhone } from '../../../../utils/formatPhone';

interface ShowUserProps {
  mailAgree: boolean;
  smsAgree: boolean;
  name: string;
  gender: string;
  birthYear: string;
  email: string;
  phoneNum: string;
  address: string;
  setShowModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowUser = ({
  mailAgree,
  smsAgree,
  name,
  gender,
  birthYear,
  email,
  phoneNum,
  address,
  setShowModify,
}: ShowUserProps) => {
  const [isMail, setIsMail] = useState(mailAgree);
  const [isSms, setIsSms] = useState(smsAgree);

  const addresses = address.split(' ');

  return (
    <div className="mx-[340px] rounded-3xl shadow-md bg-white mt-10 px-12 py-10">
      <div>
        <p className="text-2xl font-medium">기본 정보</p>
        <div className="flex items-start gap-3 mt-5">
          <img
            src="/assets/Utils/dummyProfile.png"
            alt="profile"
            className="w-[104px] h-[104px] rounded-full"
          />
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-medium">
              <p className="text-2xl">{name}</p>
              <p className="text-lg text-[#999999]">{gender}</p>
              <p className="text-lg text-[#999999]">{birthYear}</p>
            </div>
            <p className="text-xl text-[#808080]">{email}</p>
            <p className="text-xl text-[#808080]">{formatPhone(phoneNum)}</p>
          </section>
        </div>
      </div>
      <div className="my-12">
        <p className="text-2xl font-medium">주소</p>
        <section className="grid grid-cols-3 gap-4 mt-6">
          {addresses.map((a, index) => (
            <label
              key={index}
              className="p-3 rounded-2xl border border-[#CCCCCC] text-sm text-[#333333]"
            >
              {a}
            </label>
          ))}
        </section>
      </div>
      <div>
        <p className="text-2xl font-medium">프로모션 정보 수신</p>
        <div className="flex items-center gap-20 mt-6">
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/mail.svg" alt="mail" />
            <p className="font-medium text-lg text-[#666666] pr-10">이메일</p>
            <Toggle isOn={isMail} setIsOn={setIsMail} />
          </section>
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/sms.svg" alt="sms" />
            <p className="font-medium text-lg text-[#666666] pr-10">문자</p>
            <Toggle isOn={isSms} setIsOn={setIsSms} />
          </section>
        </div>
      </div>
      <div className="flex items-center justify-center mt-16 mb-2">
        <button
          className="text-white bg-primary01 rounded-[50px] font-semibold w-[60%] p-3"
          onClick={() => setShowModify(true)}
        >
          정보 수정하기
        </button>
      </div>
    </div>
  );
};

export default ShowUser;
