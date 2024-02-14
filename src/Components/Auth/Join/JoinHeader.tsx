interface JoinHeaderProps {
  step: number;
}

const JoinHeader = ({ step }: JoinHeaderProps) => {
  return (
    <div className="grid gap-5 mb-20 place-items-center">
      <div className="flex justify-between h-16 font-semibold bg-[#F2F2F2] border-2 rounded-l-full rounded-r-full mt-10">
        <span className="flex items-center justify-center">
          <section
            className={`py-5 text-center w-72 ${
              step === 1 &&
              'bg-primary01 text-white rounded-l-full rounded-r-full'
            } `}
          >
            <p>1.본인인증</p>
          </section>
        </span>

        <span className="flex items-center justify-center">
          <section
            className={`py-5 text-center w-72 ${
              step === 2 &&
              'bg-primary01 text-white rounded-l-full rounded-r-full'
            } `}
          >
            <p>2.약관동의</p>
          </section>
        </span>

        <span className="flex items-center justify-center">
          <section
            className={`py-5 text-center w-72 ${
              step === 3 &&
              'bg-primary01 text-white rounded-l-full rounded-r-full'
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
