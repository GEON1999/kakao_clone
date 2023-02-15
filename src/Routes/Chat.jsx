import styled from "styled-components";
import TopNav from "../components/TopNav";
import ChatRoom from "../components/ChatRoom";
import BottomNav from "../components/BottomNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 844px;
  box-sizing: border-box;
`;

function Chat() {
  return (
    <Wrapper>
      <TopNav />
      <ChatRoom />
      <BottomNav />
    </Wrapper>
  );
}

export default Chat;
