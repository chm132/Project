import { CgProfile } from 'react-icons/cg';
import { GrFormView } from 'react-icons/gr';
import { formatTime } from '../../utils/dayjs';
import { useParams } from 'react-router-dom';
import { useGetDetailCommunityQuery } from '../../redux/apis/communityApi';

const DetailPage = () => {
  const communityId = Number(useParams().communityId) || 0;
  const { data, isLoading, error } = useGetDetailCommunityQuery(communityId);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Network Error...</div>;
  }

  return (
    <div className="mx-40 mt-20 border rounded-md">
      <div className="p-8">
        <p className="font-bold text-gray-500">{data?.result.category}</p>
        <section className="flex items-center gap-3 py-4">
          {/* {data.result.profileImg !== '' ? (
            <img
              src={writerData.profileImg}
              alt={writerData.profileImg}
              className="object-cover w-12 h-12 rounded-full"
            />
          ) : (
            <CgProfile size={40} />
          )} */}
          <span className="font-bold">
            <p>{data?.result.memberName}</p>
            {/* <p>{postData.date}</p> */}
            <p className="text-xs text-gray-500">
              {data && formatTime(data.result.createdAt)}
            </p>
          </span>
        </section>
        <p className="py-6 text-2xl font-bold">{data?.result.title}</p>
        <p className="text-lg">{data?.result.body}</p>
        <section className="flex items-center gap-[2px] pt-10">
          <GrFormView size={28} />
          <p className="text-sm text-gray-500">
            {data?.result.views.toLocaleString()}명이 봤어요
          </p>
        </section>
      </div>
    </div>
  );
};

export default DetailPage;
