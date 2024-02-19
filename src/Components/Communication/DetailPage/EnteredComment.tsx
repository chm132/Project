import { useState } from 'react';
import { usePostCommentMutation } from '../../../redux/apis/communityApi';
import { useParams } from 'react-router-dom';

interface EnteredCommentProps {
  left?: boolean;
}

const EnteredComment = ({ left }: EnteredCommentProps) => {
  const communityId = Number(useParams().communityId) || 0;
  const [enteredComment, setEnteredComment] = useState('');

  const [postComment] = usePostCommentMutation();

  const postHandler = async () => {
    await postComment({ communityId, content: enteredComment });
  };

  return (
    <section
      className={`relative flex items-center justify-between w-full gap-2 my-10 ${
        left && 'pl-10'
      }`}
    >
      <input
        className="w-5/6 py-5 rounded-[16px] pl-16 placeholder-[#B3B3B3] text-[#B3B3B3] outline-none border bg-[#F2F2F2]"
        value={enteredComment}
        onChange={(e) => setEnteredComment(e.target.value)}
        placeholder="댓글 입력하기..."
      />
      <button
        className="px-[55px] py-5 text-white rounded-[16px] bg-primary01 hover:opacity-80 transition-all"
        onClick={postHandler}
      >
        등록
      </button>
      <img
        src="/assets/Utils/dummyProfile2.svg"
        alt="profile"
        className={`absolute w-8 h-8 left-5 top-5 ${left && 'left-16'}`}
      />
    </section>
  );
};

export default EnteredComment;
