import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FieldValues } from 'react-hook-form';
import { setCurrentUser } from '../../redux/slices/currentUserSlice';
import axios from 'axios';
import { removeNonUser } from '../../redux/slices/nonUserSlice';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signIn = async (data: FieldValues) => {
    if (data) {
      try {
        const response = await axios.post('/member/login', data);

        const accessToken = response.headers.authorization;
        const refreshToken = response.headers['authorization-refresh'];

        if (accessToken && refreshToken) {
          sessionStorage.setItem('accessToken', accessToken);
          sessionStorage.setItem('refreshToken', refreshToken);
        }

        dispatch(
          setCurrentUser({
            id: response.data.result.memberId,
            name: response.data.result.name,
            isLoggedIn: true,
          }),
        );

        // 로그인시 비회원이 입력한 휴대전화번호 기록 삭제
        dispatch(removeNonUser());
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { signIn };
};
