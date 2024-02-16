import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import Header from '../Header';
import { truncate } from '../../../utils/truncate';
import { useGetOrderByLessonsQuery } from '../../../redux/apis/categoryApi';

interface RowProps {
  title: string;
  filter: string;
}

const Row = ({ title, filter }: RowProps) => {
  let content;

  const { data, isLoading, error } = useGetOrderByLessonsQuery(filter, {
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Netword Error!</p>;
  }

  if (data) {
    const RowData = data.result.lessonList;

    content = (
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={2}
        slidesPerView={4}
        slidesPerGroup={4}
        speed={1000}
      >
        <div>
          {RowData?.map((d, index) => (
            <SwiperSlide key={index}>
              <div className="w-[95%] h-[95%] rounded-sm overflow-hidden transition-all cursor-pointer">
                <img
                  src={d.filePath}
                  alt={d.filePath}
                  className="object-cover w-full h-40 mt-10 rounded-lg"
                />
                <div className="font-medium">
                  <p className="text-lg hover:underline hover:decoration-4 w-fit">
                    {truncate(d.title, 20)}
                  </p>
                  {filter === 'views' ? (
                    <p className="text-gray-400">{d.currentCount}명 신청중!</p>
                  ) : (
                    <p className="text-gray-400">{d.place}</p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    );
  }

  return (
    <div className="py-10 px-28">
      <Header partName={title} />
      <hr className="w-full h-[2px] bg-black mt-2" />
      {content}
    </div>
  );
};

export default Row;
