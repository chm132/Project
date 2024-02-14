import { useNavigate } from 'react-router-dom';
import { truncate } from '../../utils/truncate';
import { fromNow } from '../../utils/dayjs';

interface NewsCardProps {
  id: number;
  part: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

const NewsCard = ({
  id,
  part,
  title,
  content,
  author,
  createdAt,
}: NewsCardProps) => {
  const navigate = useNavigate();

  return (
    <section
      className="container"
      style={{
        display: 'flex',

        backgroundColor: '#FFFFFF',
        width: '1142px',
        height: '166px',
        borderRadius: '24px',
        margin: '0 auto 24px',
        cursor: 'pointer',
      }}
      onClick={() => navigate(`${id}`)}
    >
      <div style={{ display: 'flex' }}>
        <img
          src="/assets/News/postList.png"
          alt="profile"
          style={{
            borderRadius: '24px, 0px, 0px, 24px',
          }}
        />
        <div
          className="content"
          style={{
            marginLeft: '16px',
          }}
        >
          <div
            className="font-semibold"
            style={{
              height: '17px',
              fontSize: '14px',

              color: '#EC9D26',
              margin: '28px 0 8px',

              lineHeight: '16.71px',
            }}
          >
            {part === 'BOARD'
              ? '공지사항'
              : part === 'HEALTH'
                ? '건강정보'
                : part === 'LIFE'
                  ? '생활정보'
                  : part === 'RECRUIT'
                    ? '취업정보'
                    : '다른 정보'}
          </div>
          <div
            style={{
              height: '24px',
              fontSize: '20px',
              marginBottom: '8px',
              fontWeight: 'bold',
              lineHeight: '23.87px',
            }}
          >
            {title}
          </div>
          <div
            style={{
              height: '21px',
              fontSize: '16px',
              marginBottom: '8px',
              color: '#808080',

              lineHeight: '19.09px',
            }}
          >
            {truncate(content, 44)}
          </div>
          <div
            className="profile"
            style={{
              width: 'auto',
              height: '24px',
              fontSize: '12px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '28px',
            }}
          >
            <img
              src="/assets/Profile/profile.png"
              alt="profile"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                marginRight: '8px',
              }}
            />
            <span
              style={{
                marginRight: '8px',
                color: '#808080',
                lineHeight: '14.32px',
              }}
            >
              {author}
            </span>
            <span style={{ color: '#B3B3B3' }}> {fromNow(createdAt)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
