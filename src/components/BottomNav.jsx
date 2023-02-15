import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { BsPerson, BsChatFill } from "react-icons/bs";

import { AiOutlineEllipsis } from "react-icons/ai";

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
  position: relative;
  top: 10px;
`;

const SmallNotification = styled.div`
  grid-area: notification;
  margin-left: 14px;
  height: 5px;
  width: 5px;
  border-radius: 2.5px;
  background-color: #fe6400;
  position: relative;
  top: 10px;
  left: 11px;
`;

const NavBottom = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  margin-top: auto;
  height: 60px;
  background-color: #f9f9fa;
  border-top: 1px solid #eaeaeb;
`;

const NotificationBox = styled.div`
  margin-bottom: 20px;
  &:nth-child(4) {
    margin-bottom: 5px;
  }
`;

function BottomNav() {
  return (
    <NavBottom>
      <BsPerson fontSize="29px" />
      <NotificationBox>
        <Notification>1</Notification>
        <BsChatFill fontSize="25px" />
      </NotificationBox>
      <IoIosSearch fontSize="29px" />
      <NotificationBox>
        <SmallNotification />
        <AiOutlineEllipsis fontSize="30px" />
      </NotificationBox>
    </NavBottom>
  );
}

export default BottomNav;
