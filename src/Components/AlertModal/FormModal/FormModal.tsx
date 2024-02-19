import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { usePostLessonGuestMutation } from '../../../redux/apis/guestApi';
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

    closeModal(false);
  };

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // 필드 유효성 검사
    const isNameValid = enteredName.trim() !== '';
    const isPhoneValid =
      enteredFirstPhone.trim() !== '' &&
      enteredSecondPhone.trim() !== '' &&
      enteredThirdPhone.trim() !== '';
    const isEmailValid =
      enteredFirstEmail.trim() !== '' && enteredSecondEmail.trim() !== '';

    setIsFormValid(isNameValid && isPhoneValid && isEmailValid);
  }, [
    enteredName,
    enteredFirstPhone,
    enteredSecondPhone,
    enteredThirdPhone,
    enteredFirstEmail,
    enteredSecondEmail,
  ]);

  return (
    <div
      style={{
        width: '640px',
        height: '411px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="z-40"
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <IoClose
          onClick={() => closeModal(false)}
          style={{
            position: 'absolute',
            right: '35px',
            top: '35px',
            width: '32px',
            height: '32px',
          }}
        />
        <section className="flex items-center justify-between">
          <p
            style={{
              height: '29px',
              fontSize: '24px',
              lineHeight: '28.64px',
              marginLeft: '53px',
              marginTop: '48px',
              marginBottom: '24px',
            }}
          >
            비회원 신청
          </p>
        </section>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px',
              width: '76px',
              marginRight: '16px',
              marginLeft: '54px',
            }}
          >
            <p
              style={{
                height: '41px',
                fontSize: '18px',
                paddingTop: '10px',
                marginBottom: '32px',
              }}
            >
              이름
            </p>
            <p
              style={{
                height: '41px',
                fontSize: '18px',
                paddingTop: '10px',
                marginBottom: '32px',
              }}
            >
              전화번호
            </p>
            <p
              style={{
                height: '41px',
                fontSize: '18px',
                paddingTop: '10px',
                marginBottom: '32px',
              }}
            >
              메일주소
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px',
              position: 'relative',
            }}
          >
            <input
              style={{
                border: '1px solid #CCCCCC',
                borderRadius: '16px',
                width: '136px',
                height: '41px',
                paddingLeft: '20px',
                fontSize: '14px',
                marginBottom: '33px',
              }}
              className="border"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
            <span
              style={{
                position: 'absolute',
                left: '-53px',
                top: '10px',
                fontSize: '18px',
                color: '#EC9D26',
              }}
            >
              {' '}
              *
            </span>
            <div
              style={{
                display: 'flex',
                marginBottom: '33px',
                position: 'relative',
              }}
            >
              <select
                style={{
                  appearance: 'none',
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                  marginRight: '19px',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
                className="border"
                value={enteredFirstPhone}
                onChange={(e) => setEnteredFirstPhone(e.target.value)}
              >
                <option value="">선택</option>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="02">02</option>
              </select>
              <span
                style={{
                  position: 'absolute',
                  left: '-17px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>

              <input
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                  marginRight: '19px',
                }}
                className="border"
                value={enteredSecondPhone}
                onChange={(e) => setEnteredSecondPhone(e.target.value)}
              />
              <input
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                }}
                className="border"
                value={enteredThirdPhone}
                onChange={(e) => setEnteredThirdPhone(e.target.value)}
              />
            </div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <input
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                }}
                className="border"
                value={enteredFirstEmail}
                onChange={(e) => setEnteredFirstEmail(e.target.value)}
              />
              <span
                style={{
                  marginLeft: '16px',
                  marginRight: '16px',

                  fontSize: '16px',

                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                }}
              >
                @
              </span>
              <select
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                  appearance: 'none',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
                className="border"
                value={enteredSecondEmail}
                onChange={(e) => setEnteredSecondEmail(e.target.value)}
              >
                <option value="">선택</option>
                <option value="naver.com">naver.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="nate.com">nate.com</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="yahoo.co.kr">yahoo.co.kr</option>
                <option value="yahoo.com">yahoo.com</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className={`${isFormValid ? 'hover:opacity-80' : ''}`}
            style={{
              width: '306px',
              height: '51px',
              padding: '16px, 124px, 16px, 122px',
              borderRadius: '50px',
              marginBottom: '32px',
              marginTop: '9px',
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '19.09px',

              backgroundColor: isFormValid ? '#EC9D26' : '#CCCCCC',
            }}
            onClick={applyHandler}
            disabled={!isFormValid}
          >
            신청 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
