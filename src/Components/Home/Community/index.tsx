import { GrFormView } from 'react-icons/gr';
import { LiaCommentDots } from 'react-icons/lia';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { viewFormat } from '../../../utils/viewFormat';
import { useGetCommunityQuery } from '../../../redux/apis/communityApi';

const Community = () => {
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetCommunityQuery();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (error) {
    return <p>Network Error!</p>;
  }

  if (data) {
    const communityData = data.result.communityList.slice(0, 3);
    return (
      <div className="">
        <Header partName="소통하러 올래" pathName="community" />
        <hr className="w-full h-[2px] bg-black mt-2 mb-5" />
        <div className="flex flex-col gap-5">
          {communityData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col gap-1 p-2 overflow-hidden transition-all cursor-pointer"
              onClick={() => navigate(`/community/${data.id}`)}
            >
              {/* TOGETHER -> 함께해요, QUESTION -> 궁금해요 */}

              <p className="text-primary01">
                {data.category === 'TOGETHER' ? '함께해요' : '궁금해요'}
              </p>
              <p className="text-lg font-semibold">{data.title}</p>
              <p className="text-lg text-slate-500">
                {truncate(data.body, 44)}
              </p>
              <div className="flex items-center mt-[2px] gap-2 text-sm text-slate-400">
                <span className="flex items-center gap-[2px]">
                  <GrFormView size={20} />

                  <p>조회수 {viewFormat(data.views)}회</p>
                </span>
                <span className="flex items-center gap-[2px]">
                  <LiaCommentDots />
                  <p>댓글 {data.commentCounts}개</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>해당 내용 준비중....</div>;
  }
};

export default Community;
