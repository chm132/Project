import {
  useDeleteApplyMutation,
  useDeleteLikeMutation,
} from '../../redux/apis/lessonApi';

interface CancelModalProps {
  lessonId: string;
  controlModal: React.Dispatch<React.SetStateAction<boolean>>;
  like?: boolean;
}

const CancelModal = ({ controlModal, lessonId, like }: CancelModalProps) => {
  const [deleteApply] = useDeleteApplyMutation();
  const [deleteLike] = useDeleteLikeMutation();

  const cancelHandler = () => {
    if (like) {
      deleteLike(lessonId);
    } else {
      deleteApply(lessonId);
    }
    controlModal(false);
  };

  return (
    <div className="top-[40%] left-[30%] flex-col gap-4 px-32 pt-16 absolute z-40 flex bg-white h-52 w-[640px] rounded-3xl">
      <p className="text-[#333333] font-semibold text-2xl">
        {like
          ? '수업 찜하기를 취소하시겠습니까?'
          : '수업 신청을 취소하시겠습니까?'}
      </p>
      <section className="absolute bottom-0 left-0 right-0 grid h-16 grid-cols-2">
        <span className="bg-[#E6E6E6] rounded-bl-3xl flex items-center justify-center cursor-pointer">
          <p
            className="text-[#808080] font-semibold text-lg "
            onClick={cancelHandler}
          >
            네, 취소할래요
          </p>
        </span>

        <span className="flex items-center justify-center cursor-pointer bg-primary01 rounded-br-3xl">
          <p
            className="text-[#FFFFFF] font-semibold text-lg "
            onClick={() => controlModal(false)}
          >
            아니요
          </p>
        </span>
      </section>
    </div>
  );
};

export default CancelModal;
