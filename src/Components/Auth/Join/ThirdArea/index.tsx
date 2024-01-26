import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  margin-left: 220px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 400px;
  position: absolute;
  left: 180px;
  border: 2px solid #5f4541;
  height: 50px;
  border-radius: 15px;
`;

const Select2 = styled.select`
  position: absolute;
  border: 2px solid #5f4541;
  left: 180px;
  height: 50px;
  border-radius: 15px;
`;
const Select3 = styled.select`
  width: 100px;
  position: absolute;
  left: 180px;
  height: 50px;
  border: 2px solid #5f4541;
  border-radius: 15px;
`;
const Select4 = styled.select`
  width: 100px;
  position: absolute;
  height: 50px;
  border: 2px solid #5f4541;
  left: 300px;
  border-radius: 15px;
`;
const Select5 = styled.select`
  width: 100px;
  position: absolute;
  border: 2px solid #5f4541;
  height: 50px;
  left: 420px;
  border-radius: 15px;
`;
const Radio1 = styled.div`
  position: absolute;
  left: 490px;
  display: flex;
  border-radius: 15px;
  input[type='radio'] {
    transform: scale(2);
    margin-right: 10px;
  }
`;
const Radio2 = styled.div`
  position: absolute;
  left: 490px;
  border-radius: 15px;
  input[type='radio'] {
    transform: scale(2);
    margin-right: 10px;
  }
`;
const Radio3 = styled.div`
  position: absolute;
  left: 490px;
  border-radius: 15px;
  input[type='radio'] {
    transform: scale(2);
    margin-right: 10px;
  }
`;
const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: 24px;
`;

const Button = styled.button`
  width: 500px;
  height: 50px;
  margin: 150px auto;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: #5f4541;
  color: white;
`;
const MarginLabel = styled.label`
  margin-right: 100px;
`;
const Label = styled.label`
  align-items: center;
  height: 50px;
  font-size: 24px;
  position: relative;
  display: flex;

  &::before {
    content: '*';
    color: red;
    font-size: 24px;
    position: absolute;
    top: 0px;
    right: -12px;
  }
  ::placeholder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
  }
`;
const PasswordMatchMessage = styled.span<{ match: boolean }>`
  width: 300px;
  position: absolute;
  color: ${(props) => (props.match ? 'green' : 'red')};
  margin-left: 660px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
`;
const PasswordMessage = styled.span`
  width: 240px;
  position: absolute;
  margin-left: 660px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  color: red;
`;
const ThirdArea = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [combinedAddress, setCombinedAddress] = useState('');

  const cities = ['Seoul', 'Busan', 'Incheon'];
  const districts = ['Gangnam', 'Mapo', 'Jung'];
  const neighborhoods = ['Apgujeong', 'Itaewon', 'Hongdae'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthYear: '',
    address: '',
    gender: '',
    receiveEmail: false,
    receiveText: false,
  });

  const passwordRef = useRef<HTMLInputElement>(null);
  const [passwordValid, setPasswordValid] = useState(true);

  const handlePasswordValidation = () => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#]).{8,}$/;
    const isValid = passwordRegex.test(formData.password);
    setPasswordValid(isValid);
    return isValid;
  };

  useEffect(() => {
    const combinedAddress = `${selectedCity} ${selectedDistrict} ${selectedNeighborhood}`;
    setCombinedAddress(combinedAddress);

    setFormData((prevData) => ({
      ...prevData,
      address: combinedAddress,
    }));
  }, [selectedCity, selectedDistrict, selectedNeighborhood]);

  const [email, setEmail] = useState('');
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checkedValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prevData) => ({
      ...prevData,
      [name]: checkedValue !== undefined ? checkedValue : value,
    }));
  };

  const handleEmailChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isPasswordValid = handlePasswordValidation();
    if (!isPasswordValid) {
      if (passwordRef.current) {
        passwordRef.current.focus();
      }
      return;
    }

    const formDataObject = {
      ...formData,
      email,
      selectedCity,
      selectedDistrict,
      selectedNeighborhood,
    };

    console.log('Form submitted:', formDataObject);
  };

  const yearOptions = [];
  for (let year = 2020; year >= 1900; year--) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}년
      </option>,
    );
  }
  const isFormComplete = (): boolean => {
    return (
      formData.name !== '' &&
      email !== '' &&
      formData.password !== '' &&
      formData.confirmPassword !== '' &&
      formData.birthYear !== '' &&
      selectedCity !== '' &&
      selectedDistrict !== '' &&
      selectedNeighborhood !== ''
    );
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>
            이름
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '275px' }}
            />
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            이메일 주소
            <Input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              style={{ width: '300px' }}
            />
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            비밀번호
            <Input
              ref={passwordRef}
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="영문, 숫자, 특수기호(!,@,#) 포함 8글자 이상으로 설정해 주세요."
            />
            {!passwordValid && (
              <PasswordMessage>
                비밀번호는 영문, 숫자, 특수기호(!,@,#)를 포함하여 8글자
                이상이어야 합니다.
              </PasswordMessage>
            )}
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            비밀번호 확인
            <Input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {formData.confirmPassword && (
              <PasswordMatchMessage
                match={formData.password === formData.confirmPassword}
              >
                {formData.password === formData.confirmPassword
                  ? '일치합니다'
                  : '일치하지 않습니다'}
              </PasswordMatchMessage>
            )}
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            출생 연도
            <Select2
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              required
            >
              <option value="">년도 선택</option>
              {yearOptions}
            </Select2>
          </Label>
        </InputWrapper>
        <InputWrapper>
          <Label>
            주소
            <Select3
              name="city"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              required
            >
              <option value="">시</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Select3>
            <Select4
              name="district"
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              required
            >
              <option value="">구</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </Select4>
            <Select5
              name="neighborhood"
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              required
            >
              <option value="">동</option>
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood} value={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </Select5>
          </Label>
        </InputWrapper>
        <InputWrapper>
          <CheckLabel>
            성별
            <Radio1>
              <input
                type="radio"
                id="male"
                name="gender"
                value="남성"
                checked={formData.gender === '남성'}
                onChange={handleChange}
              />
              <MarginLabel htmlFor="male">남성</MarginLabel>
              <input
                type="radio"
                id="female"
                name="gender"
                value="여성"
                checked={formData.gender === '여성'}
                onChange={handleChange}
              />
              <label htmlFor="female">여성</label>
            </Radio1>
          </CheckLabel>
        </InputWrapper>
        <InputWrapper>
          <CheckLabel>
            이메일 수신
            <Radio2>
              <input
                type="radio"
                id="emailReceive"
                name="receiveEmail"
                checked={formData.receiveEmail}
                onChange={handleChange}
              />
              <MarginLabel htmlFor="emailReceive">수신</MarginLabel>
              <input
                type="radio"
                id="emailReject"
                name="receiveEmail"
                checked={!formData.receiveEmail}
                onChange={handleChange}
              />
              <label htmlFor="emailReject">거부</label>
            </Radio2>
          </CheckLabel>
        </InputWrapper>
        <InputWrapper>
          <CheckLabel>
            문자 수신
            <Radio3>
              <input
                type="radio"
                id="textReceive"
                name="receiveText"
                checked={formData.receiveText}
                onChange={handleChange}
              />
              <MarginLabel htmlFor="textReceive">수신</MarginLabel>
              <input
                type="radio"
                id="textReject"
                name="receiveText"
                checked={!formData.receiveText}
                onChange={handleChange}
              />
              <label htmlFor="textReject">거부</label>
            </Radio3>
          </CheckLabel>
        </InputWrapper>
        <Button type="submit" disabled={!isFormComplete()}>
          완료
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};
export default ThirdArea;
