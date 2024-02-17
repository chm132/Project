import { useState, useEffect, useRef } from 'react';
import { Toggle } from './Toggle';
import React, { Dispatch, SetStateAction } from 'react';
import CitySelector from './citySelector';

const currentYear = new Date().getFullYear();
const startDecade = 1900;
const decades = Math.ceil((currentYear - startDecade + 1) / 10);

const ThirdArea = () => {
  const cityDetails = {
    서울특별시: {
      노원구: ['중계동', '상계동', '월계동', '하계동'],
      서초구: ['서초동', '양재동', '잠원동', '반포동'],
      강남구: ['역삼동', '삼성동', '청담동', '신사동'],
      도봉구: ['도봉동', '방학동', '쌍문동', '창동'],
      송파구: ['잠실동', '가락동', '문정동', '방이동'],
      강서구: ['등촌동', '화곡동', '발산동', '우장산동'],
    },
    경기도: {
      구리시: ['인창동', '토평동', '교문동', '수택동'],
      수원시: ['장안구', '영통구', '권선구', '팔달구'],
      성남시: ['수정구', '분당구', '중원구', '수정구'],
      안양시: ['동안구', '만안구', '동안구', '만안구'],
      평택시: ['서정동', '비전동', '서탄면', '배양동'],
      의정부시: ['의정부1동', '의정부2동', '의정부3동', '의정부4동'],
    },
    부산광역시: {
      사하구: ['괴정동', '당리동', '하단동', '장림동'],
      수영구: ['망미동', '민락동', '남천동', '마린시티'],
      진구: ['부전동', '전포동', '개금동', '당감동'],
      동구: ['초량동', '수정동', '좌천동', '범일동'],
      금정구: ['구서동', '금사동', '부곡동', '청룡동'],
      해운대구: ['우동', '좌동', '중동', '송정동'],
    },
    인천광역시: {
      부평구: ['부평동', '청천동', '산곡동', '십정동'],
      남동구: ['간석동', '논현동', '도화동', '구월동'],
      연수구: ['연수동', '동춘동', '옥련동', '송도동'],
      미추홀구: ['주안동', '도화동', '구월동', '청라동'],
      계양구: ['효성동', '작전동', '동양동', '임학동'],
      서구: ['검단동', '연희동', '마전동', '가좌동'],
    },
    울산광역시: {
      남구: ['삼산동', '신정동', '달동', '무거동'],
      동구: ['대송동', '서부동', '남목동', '화정동'],
      북구: ['염포동', '송정동', '양정동', '삼산동'],
      중구: ['남외동', '북외동', '신암동', '내외동'],
    },
    대구광역시: {
      남구: ['봉덕동', '대명동', '이천동', '수창동'],
      동구: ['봉무동', '신암동', '방촌동', '수송동'],
      서구: ['내당동', '비산동', '평리동', '상중이동'],
      북구: ['칠성동', '태전동', '동호동', '산격동'],
    },
    광주광역시: {
      동구: ['충장로', '용봉동', '서석동', '지산동'],
      서구: ['양동', '동천동', '치평동', '풍암동'],
      남구: ['주월동', '방림동', '송하동', '월산동'],
      북구: ['문흥동', '오룡동', '일곡동', '충효동'],
    },
    충청남도: {
      천안시: ['동남구', '서북구', '백석동', '불당동'],
      공주시: ['공주시1', '공주시2', '공주시3', '공주시4'],
      보령시: ['보령시1', '보령시2', '보령시3', '보령시4'],
      아산시: ['아산시1', '아산시2', '아산시3', '아산시4'],
    },
  };
  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    email: '',
    emailDomain: '',
    emailAddress: '',
    password: '',
    city: '',
    district: '',
    neighborhood: '',
    birthYear: '',
    isMail: false,
    isSms: false,
  });
  const profileData = {
    name: profile.name,
    gender: profile.gender,
    emailAddress: profile.emailAddress,
    password: profile.password,
    city: profile.city,
    district: profile.district,
    neighborhood: profile.neighborhood,
    birthYear: profile.birthYear,
    isMail: profile.isMail,
    isSms: profile.isSms,
  };

  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isMatching, setIsMatching] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const genderSelectRef = useRef<HTMLSelectElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const emailDomainSelectRef = useRef<HTMLSelectElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const birthYearSelectRef = useRef<HTMLSelectElement>(null);

  const citySelectorRef = useRef<HTMLDivElement>(null);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      email: newEmail,
      emailAddress: `${newEmail}@${profile.emailDomain}`,
    }));
  };
  const handleEmailDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDomain = e.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      emailDomain: newDomain,
      emailAddress: `${profile.email}@${newDomain}`,
    }));
  };

  const handleSubmit = () => {
    // 필수 입력 필드 확인
    if (!profile.name) {
      nameInputRef.current?.focus();
      return;
    }
    if (!profile.gender) {
      genderSelectRef.current?.focus();
      return;
    }
    if (!profile.email) {
      emailInputRef.current?.focus();
      return;
    }
    if (!profile.emailDomain) {
      emailDomainSelectRef.current?.focus();
      return;
    }
    if (!profile.password) {
      passwordInputRef.current?.focus();
      return;
    }
    if (!confirmPassword) {
      confirmPasswordInputRef.current?.focus();
      return;
    }

    // 선택된 지역 정보 확인
    const { current: citySelector } = citySelectorRef;
    if (citySelector) {
      const provinceSelect =
        citySelector.querySelector<HTMLSelectElement>('select:first-child');
      const citySelect = citySelector.querySelector<HTMLSelectElement>(
        'select:nth-child(2)',
      );
      const neighborhoodSelect =
        citySelector.querySelector<HTMLSelectElement>('select:last-child');

      if (provinceSelect && provinceSelect.value === '') {
        provinceSelect.focus();
        return;
      }
      if (citySelect && citySelect.value === '') {
        citySelect.focus();
        return;
      }
      if (neighborhoodSelect && neighborhoodSelect.value === '') {
        neighborhoodSelect.focus();
        return;
      }
    } else {
      // citySelectorRef가 존재하지 않는 경우 처리
      // 여기에 필요한 동작 추가
      return;
    }

    // 생년월일 확인
    if (!profile.birthYear) {
      birthYearSelectRef.current?.focus();
      return;
    }

    // 비밀번호 일치 및 형식 확인
    console.log('ProfileData:', profileData);
    if (!profile.password || !confirmPassword) {
      setIsMatching(false);
    } else if (profile.password !== confirmPassword) {
      setIsMatching(false);
    } else {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!regex.test(profile.password)) {
        setIsValidPassword(false);
        passwordInputRef.current?.focus();
      } else {
        setMessage('비밀번호가 확인되었습니다.');
        setIsMatching(true);
        setIsValidPassword(true);
      }
    }

    // 추가 작업 수행
  };

  const handleProfileIsMailChange = (newValue: SetStateAction<boolean>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      isMail:
        typeof newValue === 'function'
          ? newValue(prevProfile.isMail)
          : newValue,
    }));
  };

  const handleSmsChange = (newValue: SetStateAction<boolean>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      isSms:
        typeof newValue === 'function' ? newValue(prevProfile.isSms) : newValue,
    }));
  };
  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };
  useEffect(() => {
    if (confirmPassword !== '' && confirmPassword !== profile.password) {
      setIsMatching(false);
    } else {
      setIsMatching(true);
    }
  }, [confirmPassword, profile.password]);
  return (
    <div>
      <div style={{ marginLeft: '100px', marginTop: '-32px' }}>
        <div style={{ display: 'flex', marginBottom: '24px' }}>
          <p style={{ color: '#EC9D26' }}>* </p>
          <span style={{ color: '#B3B3B3' }}>
            {' '}
            표시는 필수 입력 사항입니다.
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '18px',
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
                paddingTop: '10px',
                marginBottom: '32px',
              }}
            >
              성별
            </p>
            <p
              style={{
                height: '41px',

                paddingTop: '10px',
                marginBottom: '32px',
              }}
            >
              메일주소
            </p>
            <p
              style={{
                height: '41px',
                paddingTop: '10px',
                marginBottom: '40px',
              }}
            >
              비밀번호
            </p>
            <p
              style={{
                height: '41px',
                paddingTop: '10px',
                marginBottom: '40px',
              }}
            >
              비밀번호 확인
            </p>
            <p
              style={{
                height: '41px',
                paddingTop: '10px',
                marginBottom: '40px',
              }}
            >
              주소
            </p>
            <p style={{ height: '21px', paddingTop: '10px' }}>출생연도</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '48px',
              gap: '32px',
            }}
          >
            <div style={{ position: 'relative' }}>
              <input
                ref={nameInputRef}
                type="text"
                name="name"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                required
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  paddingLeft: '20px',
                  fontSize: '14px',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: '-120px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>
            </div>
            <div style={{ position: 'relative' }}>
              <select
                ref={genderSelectRef}
                id="gender"
                name="gender"
                value={profile.gender}
                onChange={(e) =>
                  setProfile({ ...profile, gender: e.target.value })
                }
                required
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '41px',
                  appearance: 'none',
                  fontSize: '14px',
                  lineHeight: '16.71px',
                  paddingTop: 'auto',
                  paddingLeft: '20px',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
              >
                <option value="">선택</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
              <span
                style={{
                  position: 'absolute',
                  left: '-120px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>
            </div>
            <div>
              <div style={{ position: 'relative' }}>
                <input
                  ref={emailInputRef}
                  id="email"
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleEmailChange}
                  required
                  style={{
                    width: '206px',
                    border: '1px solid #CCCCCC',
                    borderRadius: '16px',
                    height: '41px',
                    paddingLeft: '20px',
                  }}
                />
                <span style={{ marginLeft: '16px', marginRight: '16px' }}>
                  @
                </span>
                <select
                  ref={emailDomainSelectRef}
                  name="emailDomain"
                  value={profile.emailDomain}
                  onChange={handleEmailDomainChange}
                  required
                  style={{
                    border: '1px solid #CCCCCC',
                    borderRadius: '16px',
                    width: '160px',
                    height: '41px',
                    paddingTop: 'auto',
                    fontSize: '14px',
                    paddingLeft: '20px',
                    appearance: 'none',
                    backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 23px center',
                  }}
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
                <span
                  style={{
                    position: 'absolute',
                    left: '-85px',
                    top: '10px',
                    fontSize: '18px',
                    color: '#EC9D26',
                  }}
                >
                  {' '}
                  *
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                name="password"
                required
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                placeholder="영문, 숫자, 특수기호 포함 8글자 이상으로 설정해 주세요."
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '400px',
                  height: '49px',
                  fontSize: '12px',
                  textAlign: 'left',
                  paddingTop: 'auto',
                  paddingLeft: '44px',
                  marginRight: '16px',
                  backgroundColor: '#F2F2F2',
                  backgroundImage: `url('/assets/Auth/tabler_lock.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 16px center',
                }}
              />
              {!isValidPassword && (
                <p style={{ color: '#E35858' }}>
                  영문, 숫자, 특수기호를 포함하여 8글자 이상으로 설정해 주세요.
                </p>
              )}
              <span
                style={{
                  position: 'absolute',
                  left: '-85px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <input
                ref={confirmPasswordInputRef}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder="비밀번호를 한 번 더 입력해주세요."
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '400px',
                  height: '49px',
                  fontSize: '12px',
                  textAlign: 'left',
                  paddingTop: 'auto',
                  paddingLeft: '44px',
                  marginRight: '16px',
                  backgroundColor: '#F2F2F2',

                  backgroundImage: `url('/assets/Auth/tabler_lock.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'left 16px center',
                }}
              />
              {!isMatching && (
                <p style={{ color: '#E35858' }}>
                  비밀번호가 일치하지 않습니다.
                </p>
              )}
              {isMatching && profile.password && confirmPassword && (
                <p style={{ color: '#17784F' }}>비밀번호가 확인되었습니다.</p>
              )}
              <span
                style={{
                  position: 'absolute',
                  left: '-42px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>
            </div>
            <CitySelector
              cityDetails={cityDetails}
              ref={citySelectorRef}
              onSelect={(
                city: string,
                district: string,
                neighborhood: string,
              ) => {
                setProfile({
                  ...profile,
                  city,
                  district,
                  neighborhood,
                });
              }}
            />
            <div style={{ display: 'flex', position: 'relative' }}>
              <select
                ref={birthYearSelectRef}
                id="birthYear"
                name="birthYear"
                value={profile.birthYear}
                required
                onChange={(e) =>
                  setProfile((prevProfile) => ({
                    ...prevProfile,
                    birthYear: e.target.value,
                  }))
                }
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '136px',
                  height: '49px',
                  fontSize: '14px',

                  paddingLeft: '20px',
                  appearance: 'none',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
              >
                <option value="" disabled>
                  선택하세요
                </option>
                {Array.from({ length: decades }, (_, i) => (
                  <option
                    key={startDecade + i * 10}
                    value={startDecade + i * 10}
                  >
                    {startDecade + i * 10}년대
                  </option>
                ))}
              </select>
              <span
                style={{
                  position: 'absolute',
                  left: '-85px',
                  top: '10px',
                  fontSize: '18px',
                  color: '#EC9D26',
                }}
              >
                {' '}
                *
              </span>
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: '18px',
            lineHeight: '21.48px',

            marginTop: '56px',
          }}
        >
          프로모션 정보 수신
        </p>
        <div
          className="flex items-center gap-20 mt-6 "
          style={{ marginBottom: '72px' }}
        >
          <section className="flex items-center gap-2">
            <p
              className=" font-medium text-[#666666] pr-10"
              style={{
                fontSize: '18px',
              }}
            >
              이메일
            </p>
            <Toggle isOn={profile.isMail} setIsOn={handleProfileIsMailChange} />
          </section>
          <section className="flex items-center gap-2">
            <p
              className="font-medium  text-[#666666] pr-10"
              style={{
                fontSize: '18px',
              }}
            >
              문자
            </p>
            <Toggle isOn={profile.isSms} setIsOn={handleSmsChange} />
          </section>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type="submit"
          onClick={handleSubmit}
          style={{
            width: '437px',
            height: '51px',
            backgroundColor: '#EC9D26',
            padding: '16px, 80px, 16px, 80px',
            borderRadius: '50px',
            fontWeight: 'bold',
            marginBottom: '104px',
            color: '#FFFFFF',
            fontSize: '16px',
            lineHeight: '19.09px',
          }}
        >
          가입 완료!
        </button>
      </div>
    </div>
  );
};
export default ThirdArea;
