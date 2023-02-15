import styled from "styled-components";
import { AiOutlineWifi } from "react-icons/ai";
import { BsBatteryFull } from "react-icons/bs";
import { FiLock } from "react-icons/fi";

const Head = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  padding: 0px 8px;
  font-size: 16px;
  font-weight: 500;
`;

const ServiceState = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  span {
    margin-right: 8px;
  }
`;

const Time = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  font-weight: 900;
`;

const BatteryState = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin: 0px 5px 0px 9px;
  }
`;

function Header() {
  return (
    <Head>
      <ServiceState>
        <span>No Service</span>
        <AiOutlineWifi />
      </ServiceState>
      <Time>18:43</Time>
      <BatteryState>
        <FiLock fontSize="11px" />
        <span>100%</span>
        <BsBatteryFull fontSize="28px" />
      </BatteryState>
    </Head>
  );
}

export default Header;
