import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../../hooks/Auth/useLogin';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../../utils/validation';

const LoginPage = () => {
  const navigate = useNavigate();
  const { signIn } = useLogin();

  type FormData = Yup.InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    signIn(data);
  };

  const naverLoginHandler = () => {
    window.location.href =
      'http://3.38.228.144:8080/oauth2/authorization/naver';
  };

  const kakaoLoginHandler = () => {
    window.location.href =
      'http://3.38.228.144:8080/oauth2/authorization/kakao';
  };

  return (
    <div className="grid gap-5 my-32 place-items-center">
      <img
        src="/assets/logo.svg"
        alt="logo"
        className="object-cover w-32 h-16"
      />
      <form
        className="flex flex-col justify-center w-[300px] gap-5 mt-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative w-full">
          {errors.email && (
            <p className="absolute text-sm font-semibold text-rose-500 -bottom-5">
              {errors.email.message}
            </p>
          )}
          <input
            {...register('email')}
            placeholder="이메일"
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
              {errors.password.message}
            </p>
          )}
          <input
            {...register('password')}
            placeholder="비밀번호"
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
          className="w-full py-4 mt-5 transition rounded-lg bg-primary01 hover:opacity-80"
        >
          <p className="font-semibold text-white">로그인</p>
        </button>
      </form>
      <section className="flex items-center justify-center text-sm font-semibold text-[#B3B3B3] h-4">
        <p className="pr-1 cursor-pointer">아이디 찾기 | </p>
        <p className="pr-1 cursor-pointer">비밀번호 찾기 | </p>
        <p className="cursor-pointer" onClick={() => navigate('/auth/join/1')}>
          회원가입
        </p>
      </section>
      <section className="w-[300px] flex flex-col gap-5 mt-10">
        <img
          src="/assets/Auth/naverLogin.svg"
          alt="naver"
          className="cursor-pointer"
          onClick={naverLoginHandler}
        />
        <img
          src="/assets/Auth/kakaoLogin.svg"
          alt="kakao"
          className="cursor-pointer"
          onClick={kakaoLoginHandler}
        />
      </section>
    </div>
  );
};

export default LoginPage;
