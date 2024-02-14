import { formatTime } from '../../../utils/dayjs';

interface ProfileProps {
  name: string;
  date: string;
  small?: boolean;
}

const Profile = ({ name, date, small }: ProfileProps) => {
  return (
    <section className="flex items-center gap-3 py-4">
      <img
        src="/assets/Utils/dummyProfile.png"
        alt="profile"
        className={`${small ? 'w-10 h-10' : 'w-16 h-16'}`}
      />
      <span>
        <p className={`text-xl font-semibold ${small && 'text-base'}`}>
          {name}
        </p>
        <p className={`font-medium text-gray-500 ${small && 'text-sm'}`}>
          <span>{formatTime(date, 'YYYY.MM.DD')}</span>
          <span className="pl-3">{formatTime(date, 'A HH:mm')}</span>
        </p>
      </span>
    </section>
  );
};

export default Profile;
