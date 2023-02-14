import styled from "styled-components";
import { AiFillAlert } from "react-icons/ai";

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
        <AiFillAlert />
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;
