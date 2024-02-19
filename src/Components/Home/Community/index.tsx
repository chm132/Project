import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { viewFormat } from '../../../utils/viewFormat';
import { useGetCommunityQuery } from '../../../redux/apis/communityApi';

const Community = () => {
  const navigate = useNavigate();
  let content;

  const { data, isLoading, error } = useGetCommunityQuery({});

  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  if (error) {
    content = <p>Network Error!</p>;
  }

  if (data) {
    const communityData = data.result.communityList.slice(0, 3);

    content = (
      <div className="flex flex-col gap-5">
        {communityData.map((data) => (
          <div
            key={data.id}className="flex flex-col gap-1 p-2 overflow-hidden transition-all cursor-pointer"
            
            onClick={() => navigate(`/community/${data.id}`)}
          >
            <p className="text-primary01">
              {data.category === 'TOGETHER' ? '같이해요' : '궁금해요'}
            </p>
            <p className="text-lg font-semibold hover:underline hover:decoration-4 w-fit">
              {data.title}
            </p>
            <p className="text-lg text-[#B3B3B3]">{truncate(data.body, 28)}</p>
            <div className="flex items-center mt-[2px] gap-2 text-sm text-slate-400">
              <span className="flex items-center gap-[2px]">
                <img
                  src="assets/Utils/view.svg"
                  alt="view"
                  className="w-4 h-4"
                />

                <p>조회수 {viewFormat(data.views)}회</p>
              </span>
              <span className="flex items-center gap-[2px]">
                <img
                  src="assets/Utils/comment.svg"
                  alt="comment"
                  className="w-4 h-4"
                />
                <p>댓글 {data.commentCounts}개</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="">
      <Header partName="소통하러 올래" pathName="community" />
      <hr className="w-full h-[2px] bg-black mt-2 mb-5" />
      {content}
    </div>
  );
};

export default Community;
