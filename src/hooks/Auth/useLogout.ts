import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCurrentUser } from '../../redux/slices/currentUserSlice';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signOut = () => {
    dispatch(removeCurrentUser());
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    navigate('/');
  };

  return { signOut };
};
