import { useNavigate, useParams } from 'react-router-dom';
import { useGetDetailNewsQuery } from '../../redux/apis/newsApi';
import { IoIosArrowBack } from 'react-icons/io';
import Profile from '../../Components/News/DetailPage/Profile';

const DetailPage = () => {
  const newsId = Number(useParams().newsId) || 0;
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetDetailNewsQuery(newsId);

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
              navigate('/news', {
                state: {
                  category: detailData.category,
                },
              })
            }
          >
            <IoIosArrowBack size={24} />
            <p className="font-medium text-[#333333] text-lg">
              {detailData.category === 'BOARD'
                ? '공지사항'
                : detailData.category === 'HEALTH'
                  ? '건강정보'
                  : detailData.category === 'LIFE'
                    ? '생활정보'
                    : '분류'}
            </p>
          </div>
        </nav>
        <div
          style={{
            backgroundColor: '#E6E6E6',
            width: '100%',
            height: '1408px',
          }}
        >
          <div
            style={{
              position: 'relative',
              top: '32px',
              backgroundColor: '#FFFFFF',
              width: '880px',
              height: '1069px',
              borderRadius: '24px',
              margin: '0 auto',
              boxShadow: '0 6px 10px #50371226',
            }}
          >
            <Profile name={detailData.author} date={detailData.createdAt} />
            <div
              className="content"
              style={{
                marginLeft: '64px',
                maxWidth: '752px',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  height: '29px',
                  marginBottom: '16px',
                  fontSize: '24px',
                  color: '#000000',
                  fontWeight: 'bold',
                }}
              >
                {detailData.title}
              </p>
              <p
                style={{
                  marginBottom: '32px',
                  fontSize: '18px',
                  width: '752px',
                  lineHeight: '28.8px',
                  color: '#666666',
                }}
              >
                {detailData.content}
              </p>
              <img
                style={{ marginBottom: '24px' }}
                src="/assets/News/post1.png"
                alt="post"
              />
              <img
                style={{ marginBottom: '32px' }}
                src="/assets/News/post2.png"
                alt="post"
              />
              <p style={{ textAlign: 'right', color: '#888888' }}>
                <img
                  src="/assets/News/view.png"
                  alt="view"
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    marginRight: '8px',
                  }}
                />
                <span style={{ fontSize: '18px', verticalAlign: 'middle' }}>
                  {detailData.views.toLocaleString()}명이 봤어요
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return <div>{content}</div>;
};

export default DetailPage;
