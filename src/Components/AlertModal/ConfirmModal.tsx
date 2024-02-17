import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';

interface ConfirmModalProps {
  like?: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConfirmModal = ({ like, closeModal }: ConfirmModalProps) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    if (like) {
      navigate('/mypage/4');
    } else {
      navigate('/mypage/2');
    }
  };

  return (
    <div className="top-[40%] left-[30%] flex-col gap-4 px-32 pt-16 absolute z-40 flex bg-white h-52 w-[640px] rounded-3xl">
      <section className="flex items-center justify-between">
        <IoClose size={20} onClick={() => closeModal(false)} />
        <p className="text-[#333333] font-semibold text-2xl">
          {like ? '찜하기가 완료되었습니다!' : '신청이 완료되었습니다!'}
        </p>
      </section>
      <p>
        {like
          ? '마이페이지 내 ‘찜한 수업’ 에서 확인하실 수 있습니다.'
          : "마이페이지 내 '수업 신청 이력'에서 확인하실 수 있습니다."}
      </p>
      <button
        onClick={navigateHandler}
        className="px-4 py-2 rounded-[50px] text-white bg-primary01"
      >
        마이페이지로 이동
      </button>
    </div>
  );
};

export default ConfirmModal;
