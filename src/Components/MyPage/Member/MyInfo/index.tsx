import { useState } from 'react';
import ShowUser from './ShowUser';
import ModifyUser from './ModifyUser';

export const dummyData = {
  email: 'hongkildong@naver.com',
  name: '홍길동',
  phoneNum: '01012345678',
  address: '서울특별시 강서구 창동',
  mailAgree: false,
  smsAgree: true,
  gender: '남성',
  birthYear: '1970년생',
};

const MyInfo = () => {
  const [showModify, setShowModify] = useState(false);

  return showModify ? (
    <ModifyUser />
  ) : (
    <ShowUser
      mailAgree={dummyData.mailAgree}
      smsAgree={dummyData.smsAgree}
      name={dummyData.name}
      gender={dummyData.gender}
      birthYear={dummyData.birthYear}
      email={dummyData.email}
      phoneNum={dummyData.phoneNum}
      address={dummyData.address}
      setShowModify={setShowModify}
    />
  );
};

export default MyInfo;
