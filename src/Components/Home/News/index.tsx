import Header from '../Header';
import { useNavigate } from 'react-router-dom';
import { truncate } from '../../../utils/truncate';
import { fromNow } from '../../../utils/dayjs';
import { useGetNewsQuery } from '../../../redux/apis/newsApi';

const News = () => {
  const navigate = useNavigate();
  let content;
  const { data, isLoading, error } = useGetNewsQuery({});

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (error) {
    content = <p>Network Error!</p>;
  }

  if (data) {
    const newsData = data?.result.newsList.slice(0, 3);

    content = (
      <div className="flex flex-col gap-5">
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className="flex gap-5 p-2 overflow-hidden transition-all cursor-pointer"
            onClick={() => navigate(`/news/${news.id}`)}
          >
            <img
              // src={news.filePath}
              // alt={news.filePath}
              src={`/assets/News/news${index + 1}.png`}
              alt="newsImg"
              className="object-cover rounded-md"
            />
            <span className="flex flex-col gap-1">
              <p className="font-medium text-primary01">
                {news.category === 'BOARD'
                  ? '공지사항'
                  : news.category === 'HEALTH'
                    ? '건강정보'
                    : news.category === 'LIFE'
                      ? '생활정보'
                      : '취업정보'}
              </p>
              <p className="text-lg font-medium hover:underline hover:decoration-4 w-fit">
                {news.title}
              </p>
              <p className="text-slate-500">{truncate(news.content, 38)}</p>
              <section id="writer" className="flex items-center gap-2 mt-1">
                <img
                  // src={news.writerProfile}
                  // alt={news.writerProfile}
                  src={`/assets/Teacher/teacher${index + 1}.png`}
                  alt="authorImg"
                  className="object-cover w-6 h-6 rounded-full"
                />
                <p className="text-sm font-medium text-slate-500">
                  {news.author}
                </p>
                <p className="text-sm font-medium text-slate-300">
                  {fromNow(news.createdAt)}
                </p>
              </section>
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="">
      <Header partName="올래 생활 뉴스" pathName="news" />
      <hr className="w-full h-[2px] bg-black mt-2 mb-5" />
      {content}
    </div>
  );
};

export default News;
