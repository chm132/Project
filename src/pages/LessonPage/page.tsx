import { useLocation } from 'react-router-dom';
import { useGetDetailLessonQuery } from '../../redux/apis/lessonApi';
import LeassonDetail from '../../Components/LessonComponent/LeassonDetail';
import Apply from '../../Components/LessonComponent/Apply';
import { useState } from 'react';
import LoginModal from '../../Components/AlertModal/LoginModal';
import CancelModal from '../../Components/AlertModal/CancelModal';
import ConfirmModal from '../../Components/AlertModal/ConfirmModal';

const LessonPage = () => {
  // 로그인 유도 모달 띄우기
  const [showLogin, setShowLogin] = useState(false);

  // 회원 -> 신청 취소 모달 띄우기
  const [showCancel, setShowCancel] = useState(false);

  // 회원 -> 신청 완료 후 확인 모달 띄우기
  const [showConfirm, setShowConfirm] = useState(false);

  // 회원 -> 찜하기 취소 모달 띄우기
  const [showLikeCancel, setShowLikeCancel] = useState(false);

  // 회원 -> 찜하기 확인 모달 띄우기
  const [showLikeConfirm, setShowLikeConfirm] = useState(false);

  // 비회원 -> 찜하기 시도할 때 로그인 유도 모달 띄우기
  const [showLikeLogin, setShowLikeLogin] = useState(false);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const lessonId = query.get('lessonId');

  const { data, isLoading, error } = useGetDetailLessonQuery(Number(lessonId), {
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>NetWork Error...</p>;
  }

  if (data) {
    const lessonData = data.result;

    content = (
      <div className=" w-full bg-[#F2F2F2]">
        <div className=" w-[1142px] h-[1547px] m-auto flex gap-4 ">
          <div className="w-[756px] bg-[#FFFFFF] mt-8 rounded-t-3xl">
            <LeassonDetail
              title={lessonData.title}
              description={lessonData.description}
              categoryId={lessonData.categoryId}
              gatherStartDate={lessonData.gatherStartDate}
              gatherEndDate={lessonData.gatherEndDate}
              teacher={lessonData.lessonTeacherList[0].name}
              limitCount={lessonData.limitCount}
              lessonType={lessonData.lessonType}
              price={lessonData.price}
              supplies={lessonData.supplies}
            />
          </div>
          <div className=" w-[370px] bg-[#FFFFFF] rounded-3xl mt-8">
            <Apply
              teacher={lessonData.lessonTeacherList[0].name}
              title={lessonData.title}
              price={lessonData.price}
              gatherStartDate={lessonData.gatherStartDate}
              gatherEndDate={lessonData.gatherEndDate}
              limitCount={lessonData.limitCount}
              currentCount={lessonData.currentCount}
              applyStatus={lessonData.applyStatus}
              likeStatus={lessonData.likeStatus}
              lessonId={lessonId!}
              setShowLogin={setShowLogin}
              setShowCancel={setShowCancel}
              setShowConfirm={setShowConfirm}
              setShowLikeLogin={setShowLikeLogin}
              setShowLikeCancel={setShowLikeCancel}
              setShowLikeConfirm={setShowLikeConfirm}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full  bg-[#F2F2F2] pb-10">
      {content}
      {showLogin && <LoginModal controlModal={setShowLogin} />}
      {showCancel && (
        <CancelModal controlModal={setShowCancel} lessonId={lessonId!} />
      )}
      {showConfirm && <ConfirmModal closeModal={setShowConfirm} />}
      {showLikeLogin && <LoginModal controlModal={setShowLikeLogin} like />}
      {showLikeCancel && (
        <CancelModal
          controlModal={setShowLikeCancel}
          lessonId={lessonId!}
          like
        />
      )}
      {showLikeConfirm && <ConfirmModal closeModal={setShowLikeConfirm} like />}
    </div>
  );
};

export default LessonPage;
