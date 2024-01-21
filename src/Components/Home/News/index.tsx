import { useState } from 'react';
import Header from '../Header';
import { NewsDataProps } from '../../../types/NewsDataProps';

const NewsData = [
  {
    id: 1,
    image: '/assets/News/news.jpeg',
    part: '건강 상식',
    title: '건강을 위해 반드시 지켜야 하는 식단!',
    writer: '친절한 쩡이쌤',
  },
  {
    id: 2,
    image: '/assets/News/news.jpeg',
    part: '건강 상식',
    title: '건강을 위해 반드시 지켜야 하는 식단!',
    writer: '친절한 쩡이쌤',
  },
];

const News = () => {
  const [newsData, setNewsData] = useState<NewsDataProps[]>(NewsData);

  return (
    <div className="">
      <Header partName="올래 생활 뉴스" />
      <hr className="w-full h-[2px] bg-black my-5" />
      {newsData.map((news) => (
        <div
          key={news.id}
          className="flex gap-5 rounded-sm overflow-hidden px-4 py-2 transition-all hover:scale-95 hover:rounded-md hover:border-slate-300 hover:border-[1px] hover:ease-in-out cursor-pointer"
        >
          <img
            src={news.image}
            alt={news.image}
            className="object-cover w-52 h-52"
          />
          <span className="font-bold">
            <p className="text-sm text-slate-500">{news.part}</p>
            <p className="py-5 text-lg">{news.title}</p>
            <p className="py-5 text-sm text-slate-500">{news.writer}</p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default News;
