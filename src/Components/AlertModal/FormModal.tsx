import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { usePostLessonGuestMutation } from '../../redux/apis/guestApi';
import { useLocation } from 'react-router-dom';

interface FormModalProps {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormModal = ({ closeModal }: FormModalProps) => {
  // lessonId 받아오는 로직입니다.
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const lessonId = query.get('lessonId');

  const [postLessonGuest] = usePostLessonGuestMutation();

  const [enteredName, setEnteredName] = useState('');

  const [enteredFirstPhone, setEnteredFirstPhone] = useState('');
  const [enteredSecondPhone, setEnteredSecondPhone] = useState('');
  const [enteredThirdPhone, setEnteredThirdPhone] = useState('');

  const [enteredFirstEmail, setEnteredFirstEmail] = useState('');
  const [enteredSecondEmail, setEnteredSecondEmail] = useState('');

  const applyHandler = () => {
    postLessonGuest({
      lessonId: lessonId,
      name: enteredName,
      email: enteredFirstEmail + '@' + enteredSecondEmail,
      phoneNum: enteredFirstPhone + enteredSecondPhone + enteredThirdPhone,
    });
  };

  return (
    <div className="top-[20%] left-[30%] flex-col gap-4 pt-10 absolute z-40 flex bg-white h-80 w-[640px] rounded-3xl">
      <section className="flex items-center justify-between">
        <p>비회원 신청</p>
        <IoClose onClick={() => closeModal(false)} />
      </section>
      <section className="flex items-center gap-5">
        <p>이름</p>
        <input
          className="border"
          value={enteredName}
          onChange={(e) => setEnteredName(e.target.value)}
        />
      </section>

      <section className="flex items-center gap-5">
        <p>전화번호</p>
        <input
          className="border"
          value={enteredFirstPhone}
          onChange={(e) => setEnteredFirstPhone(e.target.value)}
        />
        <input
          className="border"
          value={enteredSecondPhone}
          onChange={(e) => setEnteredSecondPhone(e.target.value)}
        />
        <input
          className="border"
          value={enteredThirdPhone}
          onChange={(e) => setEnteredThirdPhone(e.target.value)}
        />
      </section>

      <section className="flex items-center gap-5">
        <p>메일주소</p>
        <input
          className="border"
          value={enteredFirstEmail}
          onChange={(e) => setEnteredFirstEmail(e.target.value)}
        />
        <input
          className="border"
          value={enteredSecondEmail}
          onChange={(e) => setEnteredSecondEmail(e.target.value)}
        />
      </section>
      <button onClick={applyHandler}>신청 완료</button>
    </div>
  );
};

export default FormModal;
