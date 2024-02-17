import { useState, useEffect, useRef } from 'react';
import { Toggle } from './Toggle';
import React, { Dispatch, SetStateAction } from 'react';

interface Profile {
  name: string;
  gender: string;
  email: string;
  password: string;
  city: string;
  district: string;
  neighborhood: string;
  birthYear: string;
  isMail: boolean;
  isSms: boolean;
}
const currentYear = new Date().getFullYear();
const startDecade = 1900;
const decades = Math.ceil((currentYear - startDecade + 1) / 10);

const ThirdArea = () => {
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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isMatching, setIsMatching] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      city: e.target.value,
      district: '',
      neighborhood: '',
    }));
    setSelectedCity(e.target.value);
    setSelectedDistrict('');
    setSelectedNeighborhood('');
  };
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
  const handleNeighborhoodChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedNeighborhood = e.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,
      neighborhood: selectedNeighborhood,
    }));
    setSelectedNeighborhood(selectedNeighborhood);
  };
  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      district: e.target.value,
      neighborhood: '',
    }));
    setSelectedDistrict(e.target.value);
    setSelectedNeighborhood('');
  };

  const handleSubmit = () => {
    console.log('ProfileData:', profileData);
    if (!profile.password || !confirmPassword) {
      setMessage('비밀번호를 입력해주세요.');
      setIsMatching(false);
    } else if (profile.password !== confirmPassword) {
      setMessage('비밀번호가 일치하지 않습니다.');
      setIsMatching(false);
    } else {
      const regex =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (!regex.test(profile.password)) {
        setIsValidPassword(false);
        confirmPasswordRef.current?.focus();
      } else {
        setMessage('비밀번호가 확인되었습니다.');
        setIsMatching(true);
        setIsValidPassword(true);
      }
    }
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
    setConfirmPassword(e.target.value);
  };
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
                type="password"
                id="password"
                name="password"
                required
                value={profile.password}
                onChange={(e) =>
                  setProfile({ ...profile, password: e.target.value })
                }
                ref={confirmPasswordRef}
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
              {message && (
                <p style={{ color: isMatching ? '#17784F' : '#E35858' }}>
                  {message}
                </p>
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

            <div style={{ display: 'flex', position: 'relative' }}>
              <select
                id="city"
                name="city"
                value={profile.city}
                required
                onChange={handleCityChange}
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '208px',
                  height: '49px',
                  fontSize: '14px',
                  marginRight: '24px',
                  paddingTop: 'auto',
                  paddingLeft: '20px',
                  appearance: 'none',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
              >
                <option
                  style={{
                    fontSize: '14px',
                    textAlign: 'left',
                    lineHeight: '16.71px',

                    paddingLeft: '20px',
                  }}
                >
                  시/도
                </option>
                <option
                  value="seoul"
                  style={{
                    border: '1px solid #CCCCCC',
                    borderRadius: '16px',
                    width: '208px',
                    height: '49px',
                  }}
                >
                  서울
                </option>
                <option
                  value="busan"
                  style={{
                    border: '1px solid #CCCCCC',
                    borderRadius: '16px',
                    width: '208px',
                    height: '49px',
                  }}
                >
                  부산
                </option>
              </select>
              <select
                name="district"
                id="district"
                required
                value={selectedDistrict}
                onChange={handleDistrictChange}
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '208px',
                  height: '49px',
                  marginRight: '24px',
                  paddingTop: 'auto',
                  paddingLeft: '20px',
                  fontSize: '14px',

                  appearance: 'none',
                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
              >
                <option value="" disabled>
                  시/군/구
                </option>
                {selectedCity === 'seoul' ? (
                  <>
                    <option value="gangnam">강남구</option>
                    <option value="mapo">마포구</option>
                    <option value="jongno">종로구</option>
                  </>
                ) : selectedCity === 'busan' ? (
                  <>
                    <option value="haeundae">해운대구</option>
                    <option value="saha">사하구</option>
                    <option value="dongnae">동래구</option>
                  </>
                ) : null}
              </select>
              <select
                name="neighborhood"
                id="neighborhood"
                required
                value={selectedNeighborhood}
                onChange={handleNeighborhoodChange}
                style={{
                  border: '1px solid #CCCCCC',
                  borderRadius: '16px',
                  width: '208px',
                  height: '49px',
                  appearance: 'none',
                  paddingTop: 'auto',
                  paddingLeft: '20px',
                  fontSize: '14px',

                  backgroundImage: `url('/assets/Survey/graycheck.svg')`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 23px center',
                }}
              >
                <option value="" disabled>
                  읍/면/동
                </option>
                {selectedDistrict === 'gangnam' ? (
                  <>
                    <option value="apgujeong">압구정동</option>
                    <option value="nonhyeon">논현동</option>
                    <option value="cheongdam">청담동</option>
                  </>
                ) : selectedDistrict === 'mapo' ? (
                  <>
                    <option value="hongdae">홍대</option>
                    <option value="sinchon">신촌</option>
                    <option value="hapjeong">합정</option>
                  </>
                ) : selectedDistrict === 'jongno' ? (
                  <>
                    <option value="jongno1">종로1가</option>
                    <option value="jongno2">종로2가</option>
                    <option value="jongno3">종로3가</option>
                  </>
                ) : selectedDistrict === 'haeundae' ? (
                  <>
                    <option value="hakdong">학동</option>
                    <option value="ujeong">우정</option>
                    <option value="jangsan">장산</option>
                  </>
                ) : selectedDistrict === 'saha' ? (
                  <>
                    <option value="sahadong1">사하동1가</option>
                    <option value="sahadong2">사하동2가</option>
                    <option value="sahadong3">사하동3가</option>
                  </>
                ) : selectedDistrict === 'dongnae' ? (
                  <>
                    <option value="dongnaedong">동래동</option>
                    <option value="choryangdong">초량동</option>
                    <option value="suyeongdong">수영동</option>
                  </>
                ) : null}
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
            <div style={{ display: 'flex', position: 'relative' }}>
              <select
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
