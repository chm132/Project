import styled from 'styled-components';

interface StyledButtonProps {
  second?: boolean;
}

interface LineProps {
  child: number;
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  background-color: rgb(255, 255, 255);
  margin-top: 128px;
`;

const Box1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
`;

const StyledButton = styled.button<StyledButtonProps>`
  font-weight: bold;
  width: ${(props) => (props.second ? '148px' : '74px')};
  height: 67px;
  background-color: #fff;
  color: #000;
  font-size: 15px;
  margin-left: ${(props) => (props.second ? '56px' : '36px')};

  padding-left: 0px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1920px;
  background-color: rgb(255, 255, 255);
`;

const Line = styled.div<LineProps>`
  font-size: ${(props) => (props.child === 1 ? '15px' : '13px')};
  color: #000;
  font-weight: bold;
  margin-left: 36px;
  margin-top: ${(props) => (props.child === 1 ? '38px' : '0px')};
  margin-bottom: ${(props) => (props.child === 1 ? '22px' : '11px')};
  width: ${(props) =>
    props.child === 2
      ? '335px'
      : props.child === 3
        ? '259px'
        : props.child === 4
          ? '280px'
          : 'auto'};
  color: ${(props) => (props.child === 2 ? '#5b5b5b' : '#000')};
`;

const Box3 = styled.div`
  font-size: 14px;
  color: #000;
  font-weight: bold;
  display: flex;
  margin-left: 37px;
  width: 296px;
  background-color: rgb(255, 255, 255);
`;

const First = styled.div`
  margin-top: 0px;
  margin-right: 24px;
`;

const Second = styled.div`
  margin-top: 0px;
  margin-bottom: 42px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Box1>
        <StyledButton>이용약관</StyledButton>
        <StyledButton second>개인정보처리방침</StyledButton>
      </Box1>
      <Box2>
        <Line child={1}>올래</Line>
        <Line child={2}>서울특별시 강남구 집갖고싶다로, oo타워 5층</Line>
        <Line child={3}>고객센터 전화번호: 02-123-5678</Line>
        <Line child={4}>이메일 : givememoney@gmail.com</Line>
      </Box2>
      <Box3>
        <First>Copyright</First>
        <Second>olrae All right reserved.</Second>
      </Box3>
    </FooterContainer>
  );
}

export default Footer;
