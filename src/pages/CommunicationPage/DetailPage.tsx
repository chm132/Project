import { useState } from 'react';
import { PostDataProps } from '../../types/Community/PostDataProps';
import { WriterDataProps } from '../../types/Community/WriterDataProps';

import { CgProfile } from 'react-icons/cg';
import { GrFormView } from 'react-icons/gr';

const writer = {
  profileImg: '',
  name: '홍길동',
};

const post = {
  part: '궁금해요',
  title: '기프티콘 환불하는 법 아시는 분?',
  contents:
    '저는 음료수를 잘 안먹어서 환불하고 싶은데 좀 쉽게 설명해주실 분 있나요? 며칠 전에 친구가 카카오톡으로 스타벅스 기프티콘을 보내줬어요. 안먹는거면 환불 된다는데 방법을 모르겠네요...',
  views: 30569,
  date: '2024-01-09 03:26:00',
};

const DetailPage = () => {
  const [writerData, setWriter] = useState<WriterDataProps>(writer);
  const [postData, setPostData] = useState<PostDataProps>(post);

  const exchangeTime = (date: string) => {
    const dateObject = new Date(date);

    const formattedDateTime = dateObject.toLocaleString('kr-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, // 12시간 형식 사용 (오전/오후)
    });

    return formattedDateTime;
  };

  return (
    <div className="mx-40 mt-20 border rounded-md">
      <div className="p-8">
        <p className="font-bold text-gray-500">{postData.part}</p>
        <section className="flex items-center gap-3 py-4">
          {writerData.profileImg !== '' ? (
            <img
              src={writerData.profileImg}
              alt={writerData.profileImg}
              className="object-cover w-12 h-12 rounded-full"
            />
          ) : (
            <CgProfile size={40} />
          )}
          <span className="font-bold">
            <p>{writerData.name}</p>
            {/* <p>{postData.date}</p> */}
            <p className="text-sm text-gray-500">
              {exchangeTime(postData.date!)}
            </p>
          </span>
        </section>
        <p className="py-6 text-2xl font-bold">{postData.title}</p>
        <p className="text-lg">{postData.contents}</p>
        <section className="flex items-center gap-[2px] pt-10">
          <GrFormView size={28} />
          <p className="text-sm text-gray-500">
            {postData.views.toLocaleString()}명이 봤어요
          </p>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
