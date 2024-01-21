import { IoIosArrowForward } from 'react-icons/io';

interface JoinHeaderProps {
  step: number;
}

const JoinHeader = ({ step }: JoinHeaderProps) => {
  return (
    <div className="grid gap-5 mb-20 place-items-center">
      <p className="mb-10 text-2xl font-bold">회원가입</p>
      <div className="flex justify-between h-16 text-lg font-bold bg-gray-100 border-2 rounded-l-full rounded-r-full">
        <span className="flex items-center justify-center">
          <section
            className={`py-4 text-center w-96 ${
              step === 1 &&
              'bg-auth-color text-white rounded-l-full rounded-r-full'
            } `}
          >
            <p>1.본인인증</p>
          </section>
          <IoIosArrowForward />
        </span>

        <span className="flex items-center justify-center">
          <section
            className={`py-4 text-center w-96 ${
              step === 2 &&
              'bg-auth-color text-white rounded-l-full rounded-r-full'
            } `}
          >
            <p>2.약관동의</p>
          </section>
          <IoIosArrowForward />
        </span>

        <span className="flex items-center justify-center">
          <section
            className={`py-4 text-center w-96 ${
              step === 3 &&
              'bg-auth-color text-white rounded-l-full rounded-r-full'
            } `}
          >
            <p>3.정보입력</p>
          </section>
        </span>
      </div>
    </div>
  );
};

export default JoinHeader;
