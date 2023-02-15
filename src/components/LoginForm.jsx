import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  padding: 0px 26px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  input {
    opacity: 0.5;
    font-size: 21px;
    border: none;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    :focus {
      outline: none;
      border-bottom: 3px solid rgba(0, 0, 0, 0.5);
    }
    &:nth-child(2) {
      margin-bottom: 37px;
    }
  }
  button {
    width: 100%;
    background-color: rgba(187, 187, 187, 0.1);
    cursor: pointer;
    border: none;
    height: 57px;
    border-radius: 5px;
    font-size: 17px;
    &:nth-child(4) {
      margin: 15px 0px 25px 0px;
    }
  }
  p {
    opacity: 1;
    cursor: pointer;
    margin: auto;
    font-size: 15px;
    font-weight: 100;
  }
`;

function LoginForm() {
  return (
    <Form>
      <input name="id" type="text" placeholder="Email or phone number" />
      <input name="password" type="password" placeholder="Password" />
      <Link to={"/chat"}>
        <button type="submit">Log In</button>
      </Link>
      <button type="submit">Sign Up</button>
      <p>Find Kakao Accont or Password</p>
    </Form>
  );
}

export default LoginForm;
