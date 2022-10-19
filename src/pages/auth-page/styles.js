import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const LogoImage = styled.img`
  width: 30%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
`;

export const WelcomeText = styled.h2`
  font-family: RFLEX-REGULAR;
  font-size: 18px;
  color: white;
`;

export const LoginInfoContainer = styled.div`
  max-width: 980px;
  height: 45vh;
  background-color: var(--g-color-background-content);
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  padding: 36px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const CustomInput = styled.input`
  border: none;
  width: 200px;
  height: 24px;
  background-color: white;
  border-radius: 24px;
  padding: 6px 12px;
`;

export const ErrorText = styled.span`
  color: red;
  min-height: 18px;
  font-family: PRE-REGULAR;
  font-size: 12px;
`;

export const SignUpSpan = styled.span`
  color: white;
  min-height: 18px;
  font-family: RFLEX_REGULAR;
  font-size: 16px;
  cursor: pointer;
  text-decoration: underline;
`;
export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 24px;
  padding: 12px;
  color: white;
  font-family: RFLEX-REGULAR;
  background-color: black;
`;
