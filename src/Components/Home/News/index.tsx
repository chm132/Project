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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {newsData.map((news, index) => (
          <div
            key={news.id}
            className="flex mb-4 gap-1 p-2 overflow-hidden transition-all cursor-pointer"
            onClick={() => navigate(`/news/${news.id}`)}
          >
            <img
              // src={news.filePath}
              // alt={news.filePath}
              src={`/assets/News/news${index + 1}.svg`}
              alt="newsImg"
              style={{
                width: '103px',
                height: '103px',
                borderRadius: '16px',
              }}
            />
            <span
              style={{
                marginLeft: '12px',
              }}
            >
              <p className="text-primary01">
                {news.category === 'BOARD'
                  ? '공지사항'
                  : news.category === 'HEALTH'
                    ? '건강정보'
                    : news.category === 'LIFE'
                      ? '생활정보'
                      : '취업정보'}
              </p>
              <p className="text-lg font-semibold hover:underline hover:decoration-4 w-fit">
                {news.title}
              </p>
              <p className="text-lg text-[#B3B3B3]">
                {truncate(news.content, 25)}
              </p>
              <section
                className="author"
                style={{
                  width: 'auto',
                  height: '24px',
                  fontSize: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img
                  // src={news.writerProfile}
                  // alt={news.writerProfile}
                  src={`/assets/Teacher/teacher${index + 1}.png`}
                  alt="authorImg"
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    marginRight: '8px',
                  }}
                />
                <p
                  style={{
                    marginRight: '8px',
                    color: '#808080',
                    lineHeight: '14.32px',
                  }}
                >
                  {news.author}
                </p>
                <p style={{ color: '#B3B3B3', lineHeight: '14.32px' }}>
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
      <hr
        style={{
          marginBottom: '24px',
        }}
        className="w-full h-[2px] bg-black mt-2 mb-5"
      />
      {content}
    </div>
  );
};

export default News;
