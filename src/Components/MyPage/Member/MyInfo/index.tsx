import { useState } from 'react';
import ShowUser from './ShowUser';
// import ModifyUser from './ModifyUser';
import { useGetUserDetailQuery } from '../../../../redux/apis/myPageApi';
import ModifyUser from './ModifyUser';

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
    content = <ModifyUser />;
  }

  return <div>{content}</div>;
};

export default MyInfo;
