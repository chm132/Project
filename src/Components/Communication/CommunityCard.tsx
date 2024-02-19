import { useNavigate } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { viewFormat } from '../../utils/viewFormat';

interface CommunityCardProps {
  id: number;
  part: string;
  title: string;
  body: string;
  views: number;
  commentNums: number;
}

const CommunityCard = ({
  id,
  part,
  title,
  body,
  views,
  commentNums,
}: CommunityCardProps) => {
  const navigate = useNavigate();

  return (
    <section
      className="bg-white rounded-[18px] px-8 py-6 cursor-pointer hover:scale-105 hover:ease-in-out transition-all  flex flex-col gap-2"
      onClick={() => navigate(`${id}`)}
    >
      <p className="font-medium text-primary01">
        {part === 'TOGETHER' ? '같이해요' : '궁금해요'}
      </p>
      <p className="text-2xl font-medium w-fit">{title}</p>
      <p className="text-xl text-[#B3B3B3]">{truncate(body, 44)}</p>
      <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
        <span className="flex items-center gap-[2px]">
          <img src="assets/Utils/view.svg" alt="view" className="w-4 h-4" />
          <p>조회수 {viewFormat(views)}회</p>
        </span>
        <span className="flex items-center gap-[2px]">
          <img
            src="assets/Utils/comment.svg"
            alt="comment"
            className="w-4 h-4"
          />
          <p>댓글 {commentNums}개</p>
        </span>
      </div>
    </section>
  );
};

export default CommunityCard;
