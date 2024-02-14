import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { plusStep } from '../../redux/slices/stepSlice';

interface LoginModalProps {
  home?: boolean;
}

const LoginModal = ({ home }: LoginModalProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const laterHandler = () => {
    if (home) {
      dispatch(plusStep());
    }
  };

  const gotoLoginHandler = () => {
    navigate('/auth/login');
    if (home) {
      dispatch(plusStep());
    }
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 z-10 bg-black/50" />
      <div className="flex-col gap-4 px-32 pt-16 absolute z-40 flex bg-white h-80 w-[640px] -top-80 left-96 rounded-3xl">
        <p className="text-[#333333] font-semibold text-2xl">
          로그인 하면 더 편하게 이용할 수 있어요
        </p>
        <section className="flex items-center gap-4">
          <img src="/assets/Modal/modalCheck.svg" alt="check" />
          <p className="text-[#666666] font-medium text-lg">
            나한테 딱! 맞는 교육을 추천받아요
          </p>
        </section>

        <section className="flex items-center gap-4">
          <img src="/assets/Modal/modalCheck.svg" alt="check" />
          <p className="text-[#666666] font-medium text-lg">
            내가 좋아하는 수업이 열리면 바로 알림을 받아요
          </p>
        </section>

        <section className="absolute bottom-0 left-0 right-0 grid h-20 grid-cols-2">
          <span className="bg-[#E6E6E6] rounded-bl-3xl flex items-center justify-center cursor-pointer">
            <p
              className="text-[#808080] font-semibold text-lg "
              onClick={laterHandler}
            >
              나중에 할래요
            </p>
          </span>

          <span className="flex items-center justify-center cursor-pointer bg-primary01 rounded-br-3xl">
            <p
              className="text-[#FFFFFF] font-semibold text-lg "
              onClick={gotoLoginHandler}
            >
              로그인 하러가기
            </p>
          </span>
        </section>
      </div>
    </div>
  );
};

export default LoginModal;
