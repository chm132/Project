import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Member from '../../Components/MyPage/Member';
import NonMember from '../../Components/MyPage/NonMember';

const MyPage = () => {
  // 로그인했을 경우 currentUser = true
  const currentUser = useSelector(
    (state: RootState) => state.currentUser.isLoggedIn,
  );

  if (currentUser) {
    return <Member />;
  } else {
    return <NonMember />;
  }
};

export default MyPage;
