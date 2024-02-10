import { formatTime } from '../../../utils/dayjs';

interface ProfileProps {
  name: string;
  date: string;
}

const Profile = ({ name, date }: ProfileProps) => {
  const parsedDate = new Date(date);
  const formattedDateTime = formatTime(parsedDate, 'YYYY.MM.DD 오전 hh:mm');

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
      <div style={{ textAlign: 'left' }}>
        <p
          style={{
            fontSize: '20px',
            margin: '70px 0px 0px 0px',
            fontWeight: 'bold',
          }}
        >
          {name}
        </p>

        <p style={{ fontSize: '21px', color: '#999999' }}>
          {formattedDateTime}
        </p>
      </div>
    </div>
  );
};

export default Profile;
