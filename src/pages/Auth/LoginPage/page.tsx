import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="grid gap-5 my-32 place-items-center">
      <p className="mb-10 text-2xl font-bold">로그인</p>
      <form
        className="flex flex-col justify-center w-1/2 gap-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full">
          {errors.email && (
            <p className="absolute text-sm font-semibold text-rose-500 -bottom-5">
              이메일 또는 전화번호를 입력해주세요
            </p>
          )}
          <input
            {...register('email')}
            placeholder="이메일 또는 휴대폰번호"
            required
            className={`
                    w-full
                    px-8 
                    py-4
                    font-medium
                    bg-white
                    rounded-[20px]
                    border-2
                    outline-none
                    transition
                `}
          />
        </div>
        <div className="relative w-full">
          {errors.password && (
            <p className="absolute text-sm font-semibold text-rose-500 -bottom-5">
              비밀번호 규정에 맞지 않습니다
            </p>
          )}
          <input
            {...register('password')}
            placeholder="비밀번호"
            required
            className={`
                    w-full
                    px-8 
                    py-4
                    font-medium
                    bg-white
                    rounded-[20px]
                    border-2
                    outline-none
                    transition
                `}
          />
        </div>

        <button
          type="submit"
          className="relative w-full py-4 transition bg-auth-color border-auth-color rounded-[20px] hover:opacity-80 "
        >
          <p className="font-bold text-white">로그인</p>
        </button>
      </form>

      <div className="w-1/2">
        <button
          type="submit"
          className="relative w-full py-4 transition bg-header-color border-header-color rounded-[20px] hover:opacity-80 "
          onClick={() => navigate('/auth/join')}
        >
          <p className="font-bold">회원가입</p>
        </button>
        <section className="flex items-center justify-around mt-10 font-bold">
          <p>아이디 찾기</p>
          <p>비밀번호 찾기</p>
        </section>

        <hr className="my-5" />
      </div>
      <button className="w-1/2 px-2 py-4 text-lg font-bold bg-yellow-300 rounded-[20px]">
        카카오로 1초 회원가입하기
      </button>
      <button className="w-1/2 px-2 py-4 text-lg font-bold rounded-[20px] bg-green-500 text-white">
        네이버로 1초 회원가입하기
      </button>
    </div>
  );
};

export default LoginPage;
