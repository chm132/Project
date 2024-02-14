import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailCommunityQuery } from '../../redux/apis/communityApi';
import { IoIosArrowBack } from 'react-icons/io';
import Profile from '../../Components/Communication/DetailPage/Profile';
import EnteredComment from '../../Components/Communication/DetailPage/EnteredComment';
import Contents from '../../Components/Communication/DetailPage/Contents';

const DetailPage = () => {
  const communityId = Number(useParams().communityId) || 0;
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetDetailCommunityQuery(communityId);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (error) {
    content = <div>Network Error...</div>;
  }

  if (data) {
    const detailData = data.result;
    content = (
      <>
        <nav className="flex items-center h-20">
          <div
            className="flex items-center justify-center w-40 gap-1 cursor-pointer"
            onClick={() =>
              navigate('/community', {
                state: {
                  category: detailData.category,
                },
              })
            }
          >
            <IoIosArrowBack size={24} />
            <p className="font-medium text-[#333333] text-lg">
              {detailData.category === 'TOGETHER' ? '같이해요' : '궁금해요'}
            </p>
          </div>
        </nav>
        <div className="bg-[#F2F2F2] px-40 pt-10 pb-28">
          <div className="py-8 px-12 border rounded-[18px] shadow-lg transition-all bg-white">
            <Profile name={detailData.memberName} date={detailData.createdAt} />
            <p className="py-6 text-2xl font-semibold">{detailData.title}</p>
            <p className="text-lg font-medium text-[#666666]">
              {detailData.body}
            </p>
            <section className="flex items-center justify-end gap-[2px] pt-10">
              <img
                src="/assets/Utils/view.svg"
                alt="view"
                className="w-6 h-6"
              />
              <p className="text-lg text-[#999999]">
                {detailData.views.toLocaleString()}명이 봤어요
              </p>
            </section>
            <EnteredComment />
            <section className="flex flex-col gap-5">
              <p className="font-medium text-[#666666] text-lg">
                댓글 {detailData.communityCommentList.length}개
              </p>
              {detailData.communityCommentList.map((comment) => (
                <div key={comment.id}>
                  <Contents
                    name={comment.memberName}
                    content={comment.content}
                    likes={comment.likeCounts}
                  />
                </div>
              ))}
            </section>
          </div>
        </div>
      </>
    );
  }

  return <div>{content}</div>;
};

export default DetailPage;
