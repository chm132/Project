import axios from 'axios';
import { useNavigate } from 'react-router';

export const useJoin = () => {
  const navigate = useNavigate();
  const signUp = async (data: any) => {
    if (data) {
      console.log(data);

      const {
        emailAddress,
        password,
        name,
        birthYear,
        district,
        city,
        neighborhood,
        gender,
        isMail,
        isSms,
      } = data;

      try {
        const response = await axios.post('/member/sign-up', {
          email: emailAddress,
          password,
          name,
          phoneNum: '',
          birthYear,
          address: district + ' ' + city + ' ' + neighborhood,
          gender: gender.toUpperCase(),
          mailAgree: isMail,
          smsAgree: isSms,
        });
        console.log(response);
        navigate('/auth/login');
      } catch (err) {
        console.log(err);
      }
    }
  };
  return { signUp };
};
