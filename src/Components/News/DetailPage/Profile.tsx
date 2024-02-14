import { formatTime } from '../../../utils/dayjs';

interface ProfileProps {
  name: string;
  date: string;
}

const Profile = ({ name, date }: ProfileProps) => {
  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
  const day = parsedDate.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}.${month}.${day}`;

  const formattedTime = parsedDate.toLocaleTimeString('ko-KR', {
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  });

  return (
    <div className="profile" style={{ display: 'flex' }}>
      <img
        src="/assets/Profile/profile.png"
        alt="profile"
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          marginRight: '10px',
          margin: '64px 16px 32px 64px',
        }}
      />
      <div>
        <p
          style={{
            height: '24px',
            fontSize: '20px',
            margin: '70px 0px 8px 0px',
            fontWeight: 'bold',
            lineHeight: '23.87px',
          }}
        >
          {name}
        </p>

        <div style={{ display: 'flex' }}>
          <p
            style={{
              fontSize: '18px',
              color: '#999999',
              lineHeight: '21.48px',
              letterSpacing: '0.1%',
              marginRight: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {formattedDate}
          </p>
          <p
            style={{
              lineHeight: '21.48px',
              letterSpacing: '0.1%',
              fontSize: '18px',
              color: '#999999',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {formattedTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
