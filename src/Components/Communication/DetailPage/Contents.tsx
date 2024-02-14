import { useState } from 'react';
import Profile from './Profile';
import EnteredComment from './EnteredComment';

interface ContentsProps {
  name: string;
  content: string;
  likes: number;
}

const Contents = ({ name, content, likes }: ContentsProps) => {
  const [showComment, setShowComment] = useState(false);
  return (
    <>
      <Profile
        name={name}
        // date={comment.createdAt}
        date="2024-02-07T22:56:48"
        small
      />
      <p>{content}</p>
      <div className="flex items-center gap-3 mt-4">
        <section className="flex items-center gap-1">
          <img src="/assets/Utils/thumb.svg" alt="thumb" className="w-6 h-6" />
          <p>좋아요</p>
          <p>{likes === 0 ? '' : likes}</p>
        </section>
        <section
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => setShowComment(!showComment)}
        >
          <img
            src="/assets/Utils/blackComment.svg"
            alt="comment"
            className="w-6 h-6"
          />
          <p>답글</p>
        </section>
      </div>
      {showComment && <EnteredComment left />}
    </>
  );
};

export default Contents;
