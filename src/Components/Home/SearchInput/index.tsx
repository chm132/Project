import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 120px;
  margin: 80px 0 0 0;
`;

const SearchContainer = styled.div`
  /* width: 1406px;
  height: 73px; */
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 60px;
  /* margin-bottom: 90px; */
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  /* height: 71px; */ 
  border: none;
  outline: none;
  text-align: center;
  margin-left: 36px;
  margin-right: 0px;
`;

const SearchButton = styled.button`
  box-sizing: border-box;
  width: 200px;
  font-size: 25px;
  height: 73px;
  background-color: #ece6cc;
  border-radius: 40px;
  font-weight: bold;
  padding: 16px 32px;
  margin-right: 0px;
  border: 1px solid #ece6cc;
`;

function Search() {
  return (
    <div>
      <Container>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="분야/제목/강사명 등으로 검색해 주세요!"
          />
          <SearchButton>검색하기</SearchButton>
        </SearchContainer>
      </Container>
    </div>
  );
}

export default Search;