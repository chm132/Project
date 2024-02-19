import { useState } from 'react';
import { SetStateAction } from 'react';

import { useDispatch } from 'react-redux';
import { usePatchModifyUserMutation } from '../../../../../redux/apis/myPageApi';
import { updateCurrentUserNickname } from '../../../../../redux/slices/currentUserSlice';
import CitySelector from '../../../../Auth/Join/ThirdArea/citySelector';
import { Toggle } from '../Toggle';

const currentYear = new Date().getFullYear();
const startDecade = 1900;
const decades = Math.ceil((currentYear - startDecade + 1) / 10);

interface ModifyUserProps {
  setShowModify: React.Dispatch<React.SetStateAction<boolean>>;
  setPart: React.Dispatch<React.SetStateAction<string>>;
}

const ModifyUser = ({ setShowModify, setPart }: ModifyUserProps) => {
  const [patchModifyUser] = usePatchModifyUserMutation();
  const dispatch = useDispatch();
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
    birthYear: '',
    email: '',
    emailDomain: '',
    emailAddress: '',

    phoneNum1: '',
    phoneNum2: '',
    phoneNum3: '',
    city: '',
    district: '',
    neighborhood: '',

    isMail: false,
    isSms: false,
  });

  const handleProfileIsMailChange = (newValue: SetStateAction<boolean>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      isMail:
        typeof newValue === 'function' ? newValue(profile.isMail) : newValue,
    }));
  };

  const handleSmsChange = (newValue: SetStateAction<boolean>) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      isSms:
        typeof newValue === 'function' ? newValue(prevProfile.isSms) : newValue,
    }));
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

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // 비밀번호 변경하기로 가는 클릭 핸들러
  const gotoPwModify = () => {
    setPart('check');
  };

  const handleSubmit = async () => {
    setProfile(profile);
    const {
      emailAddress,
      name,
      phoneNum1,
      phoneNum2,
      phoneNum3,
      birthYear,
      district,
      city,
      neighborhood,
      gender,
      isMail,
      isSms,
    } = profile;
    await patchModifyUser({
      email: emailAddress,
      name: name,
      phoneNum: phoneNum1 + phoneNum2 + phoneNum3,
      birthYear: birthYear,
      address: district + ' ' + city + ' ' + neighborhood,
      gender: gender.toUpperCase(),
      mailAgree: isMail,
      smsAgree: isSms,
    });
    dispatch(updateCurrentUserNickname({ name: name }));

    setShowModify(false);
  };
  return (
    <div className="mx-[340px] rounded-3xl shadow-md bg-white mt-10 px-12 py-10">
      <div style={{ marginBottom: '64px' }}>
        <p className="text-2xl font-medium">기본 정보</p>
        <div className="flex items-start gap-3 mt-5">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="profile"
              className="w-[104px] h-[104px] rounded-full"
            />
          ) : (
            <img
              src="/assets/Utils/dummyProfile.png"
              alt="profile"
              className="w-[104px] h-[104px] rounded-full"
            />
          )}
          <section style={{ marginTop: '17px' }} className="flex flex-col">
            <div className="flex items-center font-medium">
              <img src="/assets/Utils/camera.svg" alt="" />
              <p className="text-[#666666]">프로필 사진 업로드</p>
            </div>
            <div className="flex items-center font-medium">
              <label
                style={{ marginTop: '11px' }}
                className="border border-[#CCCCCC] h-10 px-16 py-2 rounded-2xl text-[#999999] text-sm cursor-pointer"
              >
                파일선택...
                <input type="file" className="hidden" />
              </label>
              <div
                onClick={gotoPwModify}
                className="h-10 px-10 py-2 rounded-2xl bg-[#F2F2F2] cursor-pointer"
                style={{ marginLeft: '104px', width: '243px' }}
              >
                <p className="text-[#666666]">*** 비밀번호 변경하기</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: '18px',
            width: '100px',
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
            출생연도
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',

            width: '636px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              right: '115px',
              top: '0',
            }}
          >
            <p
              style={{
                height: '41px',
                fontSize: '18px',
                paddingTop: '10px',
                marginBottom: '32px',
                marginRight: '55px',
              }}
            >
              성별
            </p>
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
          </div>
          <div>
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              required
              style={{
                border: '1px solid #CCCCCC',
                borderRadius: '16px',
                width: '136px',
                height: '41px',
                paddingLeft: '20px',
                fontSize: '14px',
                marginBottom: '32px',
              }}
            />
          </div>
          <select
            id="birthYear"
            name="birthYear"
            required
            value={profile.birthYear}
            onChange={(e) =>
              setProfile({ ...profile, birthYear: e.target.value })
            }
            style={{
              border: '1px solid #CCCCCC',
              borderRadius: '16px',
              width: '136px',
              height: '41px',
              fontSize: '14px',
              marginBottom: '32px',
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
              <option key={startDecade + i * 10} value={startDecade + i * 10}>
                {startDecade + i * 10}년대
              </option>
            ))}
          </select>
          <div
            style={{
              display: 'flex',
              marginBottom: '32px',
            }}
          >
            <input
              id="email"
              type="text"
              name="email"
              value={profile.email}
              onChange={handleEmailChange}
              required
              style={{
                width: '192px',
                border: '1px solid #CCCCCC',
                borderRadius: '16px',
                height: '41px',
                paddingLeft: '20px',
              }}
            />
            <span
              style={{
                fontSize: '16px',
                marginLeft: '16px',
                marginRight: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
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
          </div>
          <div style={{ display: 'flex' }}>
            <select
              name="phoneNum1"
              required
              onChange={(e) =>
                setProfile({ ...profile, phoneNum1: e.target.value })
              }
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
            >
              <option value="">선택</option>
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="02">02</option>
            </select>
            <input
              name="phoneNum2"
              onChange={(e) =>
                setProfile({ ...profile, phoneNum2: e.target.value })
              }
              style={{
                border: '1px solid #CCCCCC',
                borderRadius: '16px',
                width: '136px',
                height: '41px',
                paddingLeft: '20px',
                fontSize: '14px',
                marginRight: '19px',
              }}
            />
            <input
              name="phoneNum3"
              onChange={(e) =>
                setProfile({ ...profile, phoneNum3: e.target.value })
              }
              style={{
                border: '1px solid #CCCCCC',
                borderRadius: '16px',
                width: '136px',
                height: '41px',
                paddingLeft: '20px',
                fontSize: '14px',
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <p
          style={{
            fontSize: '24px',
            marginTop: '20px',
            marginBottom: '24px',
          }}
        >
          주소
        </p>
        <CitySelector
          cityDetails={cityDetails}
          onSelect={(city: string, district: string, neighborhood: string) => {
            setProfile({
              ...profile,
              city,
              district,
              neighborhood,
            });
          }}
        />
      </div>

      <div className="mt-10">
        <p
          style={{
            fontSize: '24px',
            marginTop: '20px',
            marginBottom: '24px',
          }}
        >
          프로모션 정보 수신
        </p>
        <div className="flex items-center gap-20 mt-6">
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/mail.svg" alt="mail" />
            <p className="font-medium text-lg text-[#666666] pr-10">이메일</p>
            <Toggle isOn={profile.isMail} setIsOn={handleProfileIsMailChange} />
          </section>
          <section className="flex items-center gap-2">
            <img src="/assets/MyPage/sms.svg" alt="sms" />
            <p className="font-medium text-lg text-[#666666] pr-10">문자</p>
            <Toggle isOn={profile.isSms} setIsOn={handleSmsChange} />
          </section>
        </div>
      </div>

      <div className="flex items-center justify-center mt-16 mb-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-primary01 rounded-[50px] font-semibold w-[60%] p-3"
        >
          정보 수정 완료
        </button>
      </div>
    </div>
  );
};

export default ModifyUser;
