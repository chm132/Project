import { useState } from 'react';
import ModifyUser from './ModifyUser';
import PasswordCheck from './PasswordCheck';
import PasswordUpdate from './PasswordUpdate';

interface ModifyProps {
  // setShowModify(false) 하면 아에 닫아짐
  setShowModify: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modify = ({ setShowModify }: ModifyProps) => {
  const [part, setPart] = useState('modify');

  return (
    <div>
      {part === 'modify' && (
        <ModifyUser setShowModify={setShowModify} setPart={setPart} />
      )}
      {part === 'check' && <PasswordCheck setPart={setPart} />}
      {part === 'update' && <PasswordUpdate setPart={setPart} />}
    </div>
  );
};

export default Modify;
