import Header from '../Header';
import { truncate } from '../../../utils/truncate';
import { fromNow } from '../../../utils/dayjs';
import { useGetNewsQuery } from '../../../redux/apis/newsApi';

const NewsData = [
  {
    id: 1,
    filePath: '/assets/News/news1.png',
    category: '건강 상식',
    title: '건강을 위해 반드시 지켜야 하는 식단!',
    body: '안녕하세요, 쩡이쌤입니다! 건강을 위해 반드시 지켜야 하는 식단 다섯가지를 가져왔습니다!',
    time: '2023-01-31T07:37:14.092Z',
    author: '친절한 쩡이쌤',
    writerProfile: '/assets/Teacher/teacher1.png',
  },
  {
    id: 2,
    filePath: '/assets/News/news2.png',
    category: '건강 상식',
    title: '건강을 위해 반드시 지켜야 하는 식단!',
    body: '안녕하세요, 쩡이쌤입니다! 건강을 위해 반드시 지켜야 하는 식단 다섯가지를 가져왔습니다!',
    time: '2024-01-11T07:37:14.092Z',
    author: '친절한 쩡이쌤',
    writerProfile: '/assets/Teacher/teacher2.png',
  },
  {
    id: 3,
    filePath: '/assets/News/news3.png',
    category: '건강 상식',
    title: '건강을 위해 반드시 지켜야 하는 식단!',
    body: '안녕하세요, 쩡이쌤입니다! 건강을 위해 반드시 지켜야 하는 식단 다섯가지를 가져왔습니다!',
    time: '2024-02-01T07:37:14.092Z',
    author: '친절한 쩡이쌤',
    writerProfile: '/assets/Teacher/teacher3.png',
  },
];

const News = () => {
  const { data, isLoading, error } = useGetNewsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Network Error!</p>;
  }

  if (data) {
    const newsData = data?.result.newsList.slice(0, 3);
    return (
      <div className="">
        <Header partName="올래 생활 뉴스" />
        <hr className="w-full h-[2px] bg-black mt-2 mb-5" />
        <div className="flex flex-col gap-5">
          {newsData.map((news, index) => (
            <div
              key={news.id}
              className="flex gap-2 p-2 overflow-hidden transition-all cursor-pointer"
            >
              <img
                // src={news.filePath}
                // alt={news.filePath}
                src={`/assets/News/news${index + 1}.png`}
                alt="newsImg"
                className="object-cover rounded-md"
              />
              <span className="">
                <p className="text-primary01">
                  {news.category === 'BOARD'
                    ? '공지사항'
                    : news.category === 'HEALTH'
                      ? '건강정보'
                      : news.category === 'LIFE'
                        ? '생활정보'
                        : '취업정보'}
                </p>
                <p className="text-lg">{news.title}</p>
                <p className="text-slate-500">{truncate(news.content, 40)}</p>
                <section id="writer" className="flex items-center gap-2 mt-1">
                  <img
                    // src={news.writerProfile}
                    // alt={news.writerProfile}
                    src={`/assets/Teacher/teacher${index + 1}.png`}
                    alt="authorImg"
                    className="object-cover w-6 h-6 rounded-full"
                  />
                  <p className="text-sm text-slate-500">{news.author}</p>
                  <p className="text-sm text-slate-300">
                    {fromNow(news.createdAt)}
                  </p>
                </section>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <div>해당 내용 준비중....</div>;
  }
};

export default News;
