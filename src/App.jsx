import styled from "styled-components";
import Header from "./components/Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;
const ContentsWrapper = styled.div`
  width: 486px;
  height: 869px;
  background-color: white;
`;

function App() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <Header />
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;
