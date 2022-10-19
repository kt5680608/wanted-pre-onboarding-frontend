import React, { useState, useEffect } from "react";

import { signupAPI } from "../../api/auth/index";

import { useNavigate } from "react-router-dom";

import {
  MainContainer,
  InputContainer,
  LoginInfoContainer,
  LogoContainer,
  CustomInput,
  LogoImage,
  WelcomeText,
  ErrorText,
  SignUpSpan,
  SubmitButton,
} from "./styles";

function AuthPage() {
  const navigate = useNavigate();
  const [type, setType] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));

  const isValidEmail = () => {
    const checkEmail = /\S+@\S+\.\S+/.test(email);
    if (!checkEmail) {
      setError("형식에 맞는 이메일을 입력해주세요");
    }
    return checkEmail;
  };

  const isValidPassword = () => {
    if (password.length >= 8) {
      return true;
    } else {
      setError("비밀번호는 8자 이상 입력해주세요.");
      return false;
    }
  };

  const submitHandler = () => {
    if (isValidEmail() && isValidPassword()) {
      signupAPI(email, password, type, getError, getToken);
    }
    initializeData();
  };

  const getError = (errorMessage) => {
    setError(errorMessage);
  };

  const getToken = (token) => {
    setToken(token);
  };

  const initializeData = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/todo");
    }
  }, [token]);
  return (
    <MainContainer>
      <LoginInfoContainer>
        <LogoContainer>
          <LogoImage src="/ghost.png" />
          <WelcomeText>
            Hello World! <br />
            {type === "signin" ? "Sign in here !" : "Sign up here!"}
          </WelcomeText>
        </LogoContainer>
        <InputContainer>
          <CustomInput
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
          />
          <CustomInput
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitHandler();
              }
            }}
            value={password}
            placeholder={
              type === "signin" ? "password" : "least 8 characters password"
            }
          />
          <SignUpSpan
            onClick={() => {
              if (type === "signin") {
                setType("signup");
              } else if (type === "signup") {
                setType("signin");
              }
              initializeData();
              setError("");
            }}
          >
            {type === "signin" ? "Sign up here!" : "Sign in here!"}{" "}
          </SignUpSpan>
          <ErrorText>{error}</ErrorText>
        </InputContainer>

        <SubmitButton
          onClick={() => {
            submitHandler();
          }}
        >
          submit
        </SubmitButton>
      </LoginInfoContainer>
    </MainContainer>
  );
}

export default AuthPage;
