import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: #808080;
`;

const ToggleContainer = styled.div`
  position: relative;
  /* left: 47%; */
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    background-color: rgb(233, 233, 234);
  }
  //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: #ec9d26;
    transition: 0.5s;
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255, 254, 255);
    transition: 0.5s;
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  }
  > .toggle--checked {
    left: 27px;
    transition: 0.5s;
  }
`;

interface ToggleProps {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Toggle = ({ isOn, setIsOn }: ToggleProps) => {
  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setIsOn(!isOn);
  };

  return (
    <Wrapper>
      <p>거부</p>
      <ToggleContainer
        // 클릭하면 토글이 켜진 상태(isOn)를 boolean 타입으로 변경하는 메소드가 실행
        onClick={toggleHandler}
      >
        <div
          className={`toggle-container ${isOn ? 'toggle--checked' : null}`}
        />
        <div className={`toggle-circle ${isOn ? 'toggle--checked' : null}`} />
      </ToggleContainer>
      <p>수신</p>
    </Wrapper>
  );
};
