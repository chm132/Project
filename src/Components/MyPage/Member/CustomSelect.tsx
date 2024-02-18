import React, { useState } from 'react';

interface AgeSelectProps {
  options: string[]; // 선택 옵션 배열
  initialOption: string; // 초기 선택 옵션
}

const CustomSelect: React.FC<AgeSelectProps> = ({ options, initialOption }) => {
  const [selectedOption, setSelectedOption] = useState<string>(initialOption);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      id="age"
      name="age"
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
        backgroundImage: `url('/assets/MyPage/graycheck.svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 23px center',
      }}
      value={selectedOption}
      onChange={handleChange}
    >
      <option value="" disabled hidden>
        {initialOption}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CustomSelect;
