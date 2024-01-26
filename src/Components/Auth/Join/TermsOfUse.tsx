interface TermsOfUseProps {
  title: string;
  onChange: (index: number) => void;
  checked: boolean;
}

const TermsOfUse = ({ title, onChange, checked }: TermsOfUseProps) => {
  return (
    <div>
      <p className="mb-5 text-2xl font-bold">{title}</p>
      <div className="px-4 py-2 border rounded-md">
        <p>[제 1장 총칙]</p>
        <p>제 1조(목적)</p>
        <p>
          이 약관은
          블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
        </p>
        <p className="mt-10">제 2조(약관의 명시 및 개정)</p>
        <p>블라블라</p>
        <p className="mt-10">※ 귀하께서는 이용약관에 거부할 권리가 있습니다.</p>
        <p className="ml-3">
          거부에 따른 불이익: 동의를 거부하실 경우 회원가입이 불가능할 것을
          알려드립니다.
        </p>
      </div>
      <div className="flex items-center justify-end gap-20 mt-3">
        <section className="flex items-center gap-2">
          <label
            className={`border rounded-md cursor-pointer w-7 h-7 hover:opacity-50 ${
              checked ? 'bg-auth-color' : 'bg-gray-200'
            }`}
            onClick={() => onChange(0)}
          />
          <p>동의함</p>
        </section>
        <section className="flex items-center gap-2">
          <label
            className={`border rounded-md cursor-pointer w-7 h-7 hover:opacity-50 ${
              !checked ? 'bg-auth-color' : 'bg-gray-200'
            }`}
            onClick={() => onChange(1)}
          />
          <p>동의하지 않음</p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
