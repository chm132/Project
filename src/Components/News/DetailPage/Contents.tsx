import Profile from './Profile';

interface ContentsProps {
  name: string;
  content: string;
}

const Contents = ({ name, content }: ContentsProps) => {
  return (
    <>
      <Profile
        name={name}
        // date={comment.createdAt}
        date="2024-02-07T22:56:48"
      />
      <p>{content}</p>
    </>
  );
};

export default Contents;
