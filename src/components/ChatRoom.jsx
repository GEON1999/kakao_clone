import styled from "styled-components";

const ChatRoomBox = styled.div`
  display: grid;
  grid-template-areas:
    "img chatUser time"
    "img chat notification";
`;

const ImgBox = styled.div`
  margin-left: 20px;
  width: 65px;
  height: 65px;
  grid-area: img;
  img {
    border-radius: 20px;
    width: 65px;
    height: 65px;
  }
`;

const ChatUser = styled.p`
  grid-area: chatUser;
  font-size: 18px;
  font-weight: 500;
`;

const Time = styled.p`
  grid-area: time;
  opacity: 0.5;
`;

const ChatText = styled.p`
  grid-area: chat;
  opacity: 0.5;
`;

const Notification = styled.div`
  grid-area: notification;
  margin-left: 14px;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  background-color: #fe6400;
  color: white;
  display: flex;
  justify-content: center;
`;

function ChatRoom() {
  return (
    <ChatRoomBox>
      <ImgBox>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/2048px-KakaoTalk_logo.svg.png"
          alt="kakao"
        />
      </ImgBox>
      <ChatUser>KakaoTalk</ChatUser>
      <Time>21:22</Time>
      <ChatText>Please Check My Kakao Account Info</ChatText>
      <Notification>1</Notification>
    </ChatRoomBox>
  );
}
export default ChatRoom;
