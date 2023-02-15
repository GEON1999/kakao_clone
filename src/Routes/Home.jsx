import styled from "styled-components";
import LoginForm from "../components/LoginForm";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    opacity: 0.5;
    font-size: 17px;
    font-weight: 500;
  }
`;

const Greeting = styled.h1`
  margin: 80px 0px 26px 0px;
  font-size: 24px;
  font-weight: 500;
`;

function Home() {
  return (
    <Wrapper>
      <Greeting>Welcome to KakaoTalk</Greeting>
      <p>if you have a Kakao Account,</p>
      <p>log in with your email or phone number.</p>
      <LoginForm />
    </Wrapper>
  );
}

export default Home;
