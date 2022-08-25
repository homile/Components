import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Week4 = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickName: "",
  });
  const [validationEmail, setValidationEmail] = useState("none");
  const [validationPassword, setValidationPassword] = useState("none");
  const [validationPasswordCheck, setValidationPasswordCheck] =
    useState("none");
  const [validationNickName, setValidationNickName] = useState("none");

  const nameInput = useRef(null);
  useEffect(() => {
    nameInput.current.focus();
  }, []);

  const emailChange = (e) => {
    setUserInfo({ ...userInfo, email: e });
  };

  useEffect(() => {
    // 이메일 형식 체크 정규표현식
    if (userInfo.email !== "") {
      const reg =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      if (reg.test(userInfo.email)) {
        setValidationEmail("none");
      } else {
        setValidationEmail("block");
      }
    }

    if (userInfo.password !== "") {
      const reg = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/;
      if (reg.test(userInfo.password)) {
        setValidationPassword("none");
        if (userInfo.password === userInfo.passwordCheck && userInfo.password !== "" && userInfo.passwordCheck !== "") {
          setValidationPasswordCheck("none");
        } else {
          setValidationPasswordCheck("block");
        }
      } else {
        setValidationPassword("block");
      }
    }

    if (userInfo.passwordCheck !== ""){
      if (userInfo.password === userInfo.passwordCheck && userInfo.password !== "" && userInfo.passwordCheck !== "") {
        setValidationPasswordCheck("none");
      } else {
        setValidationPasswordCheck("block");
      }
    }
  }, [userInfo]);

  const passwordChange = (e) => {
    setUserInfo({ ...userInfo, password: e });
  };

  const passwordCheckChange = (e) => {
    setUserInfo({ ...userInfo, passwordCheck: e });
  };

  const nickNameChange = (e) => {
    setUserInfo({...userInfo, nickName: e})
    if (e !== "") {
      setValidationNickName("none");
    } else {
      setValidationNickName("block");
    }
  };

  const signUpHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <StyledSignUpContainer>
        <StyledSignUpTitle>회원가입</StyledSignUpTitle>
        <form>
          <StyledInputContainer
            height={validationEmail === "block" ? "100px" : "90px"}
          >
            <label htmlFor="email">이메일 계정</label>
            <div>
              <input
                id="email"
                type="email"
                placeholder="이메일 계정"
                value={userInfo.email}
                ref={nameInput}
                onChange={(e) => emailChange(e.target.value)}
              />
              <i className="fa-solid fa-at" />
            </div>
            <ValidationCheck display={validationEmail}>
              {userInfo.email === ""
                ? "이메일을 입력해주세요."
                : "이메일 형식이 올바르지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer
            height={validationPassword === "block" ? "100px" : "90px"}
          >
            <label htmlFor="password">비밀번호</label>
            <div>
              <input
                id="password"
                type="password"
                placeholder="비밀번호"
                value={userInfo.password}
                autoComplete="off"
                onChange={(e) => passwordChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validationPassword}>
              {userInfo.password === ""
                ? "비밀번호를 입력해주세요"
                : "8~16자 영문문자, 숫자, 특수문자를 사용하세요."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer
            height={validationPasswordCheck === "block" ? "100px" : "90px"}
          >
            <label htmlFor="passwordCheck">비밀번호 확인</label>
            <div>
              <input
                id="passwordCheck"
                type="password"
                placeholder="비밀번호 확인"
                value={userInfo.passwordCheck}
                autoComplete="off"
                onChange={(e) => passwordCheckChange(e.target.value)}
              />
              <i className="fa-solid fa-lock"></i>
            </div>
            <ValidationCheck display={validationPasswordCheck}>
              {userInfo.passwordCheck === ""
                ? "비밀번호를 입력해주세요"
                : "비밀번호가 일치하지 않습니다."}
            </ValidationCheck>
          </StyledInputContainer>
          <StyledInputContainer
            height={validationNickName === "block" ? "100px" : "90px"}
          >
            <label htmlFor="nickName">닉네임</label>
            <div>
              <input
                id="nickName"
                placeholder="사용할 닉네임"
                value={userInfo.nickName}
                onChange={(e) => nickNameChange(e.target.value)}
              />
              <i className="fa-solid fa-user"></i>
            </div>
            <ValidationCheck display={validationNickName}>
              {userInfo.nickName === "" && "닉네임을 입력해주세요."}
            </ValidationCheck>
          </StyledInputContainer>
          <ButtonLogin type="submit" onClick={(e) => signUpHandler(e)}>
            가입하기
          </ButtonLogin>
        </form>
      </StyledSignUpContainer>
    </>
  );
};

export default Week4;

const StyledSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 410px;
  height: 910px;

  hr {
    width: 100%;
    border: 0.5px solid #dedede;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  form {
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

const StyledSignUpTitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const ValidationCheck = styled.label`
  display: ${(props) => props.display || "none"};
  color: red;
  margin-top: -0.5rem;
`;

const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard-Medium";
  width: ${(props) => props.width || "100%"};
  height: 54px;
  font-size: 20px;
  color: ${(props) => props.color || "white"};
  background: ${(props) => props.background || "#2584f4"};
  border: 1px solid ${(props) => props.borderColor || "none"};
  border-radius: 0.5rem;
  margin: 0.6rem 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-items: center;
  width: 100%;
  height: ${(props) => props.height || "90px"};
  margin-bottom: 1.5rem;

  label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 17px;
    font-family: "Pretendard-Medium";
  }

  input {
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 0.5rem;
    padding: 0;
    font-size: 18px;
    text-indent: 2.5rem;
  }

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }

  i {
    position: absolute;
    top: 1.1rem;
    left: 1rem;
    color: ${(props) => props.color || "#CCCCCC"};
  }
`;
