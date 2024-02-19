import { useState } from 'react';
import ShowUser from './ShowUser';
import { useGetUserDetailQuery } from '../../../../redux/apis/myPageApi';
import Modify from './Modify';

const MyInfo = () => {
  const { data } = useGetUserDetailQuery();
  const [showModify, setShowModify] = useState(false);

  let content;

  if (data && !showModify) {
    const userData = data.result;
    content = (
      <ShowUser
        mailAgree={userData.mailAgree}
        smsAgree={userData.smsAgree}
        name={userData.name}
        gender={userData.gender}
        birthYear={userData.birthYear}
        email={userData.email}
        phoneNum={userData.phoneNum}
        address={userData.address}
        setShowModify={setShowModify}
      />
    );
  }

  if (showModify) {
    content = <Modify setShowModify={setShowModify} />;
  }

  return <div>{content}</div>;
};

export default MyInfo;
