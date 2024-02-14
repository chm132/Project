import * as Yup from 'yup';

export const schema = Yup.object({
  email: Yup.string()
    .email('이메일 형식을 입력해주세요')
    .required('이메일을 입력해 주세요'),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      '8글자 이상 영문자, 숫자, 특수문자를 조합해서 입력하세요',
    )
    .required('비밀번호를 입력해 주세요'),
});
