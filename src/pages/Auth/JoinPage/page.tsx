import { useNavigate } from 'react-router-dom';

const JoinPage = () => {
  const navigate = useNavigate();

  return (
    <div className="grid gap-5 place-items-center my-44">
      <p className="mb-10 text-2xl font-bold">회원가입</p>
      <button
        className="w-1/2 px-2 py-4 text-lg font-bold rounded-[20px] bg-header-color"
        onClick={() => navigate('/auth/join/1')}
      >
        회원가입하기(휴대폰번호, 이메일)
      </button>
      <button className="w-1/2 px-2 py-4 text-lg font-bold bg-yellow-300 rounded-[20px]">
        카카오로 1초 회원가입하기
      </button>
      <button className="w-1/2 px-2 py-4 text-lg font-bold rounded-[20px] bg-green-500 text-white">
        네이버로 1초 회원가입하기
      </button>
    </div>
  );
};

export default JoinPage;
