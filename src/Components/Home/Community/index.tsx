import { useState } from 'react';
import { GrFormView } from 'react-icons/gr';
import { LiaCommentDots } from 'react-icons/lia';
import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { PostDataProps } from '../../../types/Community/PostDataProps';

const CommunityData = [
  {
    id: 1,
    part: '궁금해요',
    title: '기프티콘 환불받는 방법 아시는 분?',
    contents: '저는 음료수를 잘 안먹어서 환불받고싶은데 잘 아시는 분 구합니다.',
    views: 30569,
    comments: 30,
  },
  {
    id: 2,
    part: '궁금해요',
    title: '기프티콘 환불받는 방법 아시는 분?',
    contents: '저는 음료수를 잘 안먹어서 환불받고싶은데 잘 아시는 분 구합니다.',
    views: 30569,
    comments: 30,
  },
  {
    id: 3,
    part: '궁금해요',
    title: '기프티콘 환불받는 방법 아시는 분?',
    contents: '저는 음료수를 잘 안먹어서 환불받고싶은데 잘 아시는 분 구합니다.',
    views: 30569,
    comments: 30,
  },
];

const Community = () => {
  const navigate = useNavigate();

  const [communityData, setCommunityData] =
    useState<PostDataProps[]>(CommunityData);

  return (
    <div className="">
      <Header partName="소통하러 올래" pathName="community" />
      <hr className="w-full h-[2px] bg-black my-5" />
      <div className="flex flex-col gap-5">
        {communityData.map((data) => (
          <div
            key={data.id}
            className="w-[95%] h-[95%] rounded-sm overflow-hidden px-4 py-2 transition-all hover:scale-95 hover:rounded-md hover:border-slate-300 hover:border-[1px] hover:ease-in-out cursor-pointer"
            onClick={() => navigate(`/community/${data.id}`)}
          >
            <p className="text-lg text-slate-400">{data.part}</p>
            <p className="text-lg">{data.title}</p>
            <p className="text-lg text-slate-500">{data.contents}</p>
            <div className="flex items-center mt-[2px] gap-2">
              <span className="flex items-center gap-[2px]">
                <GrFormView size={20} />
                <p>{data.views.toLocaleString()}</p>
              </span>

              <span className="flex items-center gap-[2px]">
                <LiaCommentDots />
                <p>{data.comments}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
