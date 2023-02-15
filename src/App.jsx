import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Chat from "./Routes/Chat";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;
const ContentsWrapper = styled.div`
  width: 486px;
  height: 869px;
  background-color: white;
  box-sizing: border-box;
`;

function App() {
  return (
    <Wrapper>
      <ContentsWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;
