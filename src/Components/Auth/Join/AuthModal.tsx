import Modal from 'react-modal';

const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: ' rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100vh',
    zIndex: '10',
    position: 'fixed',
    top: '0',
    left: '0',
  },
  content: {
    width: '600px',
    height: '400px',
    zIndex: '150',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    justifyContent: 'center',
    overflow: 'auto',
  },
};

interface AuthModalProps {
  showAuthModal: boolean;
  setShowAuthModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalCheckHandler: () => void;
  step: number; // 첫번째 contents, 두번째 contents 나눠 보여주기 위함
}

const AuthModal = ({
  showAuthModal,
  setShowAuthModal,
  modalCheckHandler,
  step,
}: AuthModalProps) => {
  return (
    <Modal
      style={customModalStyles}
      isOpen={showAuthModal}
      closeTimeoutMS={300}
      ariaHideApp={false}
      onRequestClose={() => setShowAuthModal(false)}
      contentLabel="Qna Modal"
    >
      <section className="flex flex-col items-center justify-center gap-6 py-10">
        {step === 1 && (
          <>
            <p className="text-lg">
              인증번호가 문자로 발송되었습니다. (2분 이내 소요)
            </p>
            <p className="text-lg">인증번호를 입력해 주시기 바랍니다.</p>
          </>
        )}
        {step === 2 && <p className="mb-10 text-lg">인증이 완료되었습니다.</p>}
        <button
          className="w-96 my-5 py-4 px-12 transition bg-auth-color border-auth-color rounded-[20px] hover:opacity-80 text-white font-bold text-lg"
          onClick={() => modalCheckHandler()}
        >
          확인
        </button>
        <span className="flex items-center gap-2">
          <p>인증번호를 못 받으셨나요?</p>
          <p className="font-black cursor-pointer hover:opacity-50">
            재발송하기
          </p>
        </span>
      </section>
    </Modal>
  );
};

export default AuthModal;
