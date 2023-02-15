import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { BsChat, BsGear } from "react-icons/bs";
import { CiMusicNote1 } from "react-icons/ci";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  margin: 20px 0px 30px 0px;
  p {
    font-size: 25px;
    font-weight: 900;
  }
`;
const ItemList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 45%;
`;

function TopNav() {
  return (
    <Nav>
      <p>Chats</p>
      <ItemList>
        <IoIosSearch fontSize="29px" />
        <BsChat fontSize="23px" />
        <CiMusicNote1 fontSize="29px" />
        <BsGear fontSize="25px" />
      </ItemList>
    </Nav>
  );
}

export default TopNav;
