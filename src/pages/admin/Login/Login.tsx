import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { API } from "../../../config";

interface LoginPageState {
  email: string;
  pw: string;
  token: string;
  department: string;
  name: string;
}

const Login = () => {
  const [data, setData] = useState<LoginPageState>({
    email: "",
    pw: "",
    token: "",
    department: "",
    name: "",
  });
  const { email, pw, token, department, name } = data;

  const gotoLogin = async () => {
    await axios
      .post(`${API}user/admin/sign-in`, {
        email: email,
        password: pw,
      })
      .then((res: any) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        setData({
          ...data,
          token: res.data.token,
          email: "",
        });
      })
      .catch((error) => {
        console.log("error", error.res);
      });
  };

  const gotoMail = async () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("department", department);
    await axios.post(`${API}user`, formData);
  };
  console.log("token", token);
  return (
    <LoginComponent>
      <LoginForm>
        {/* token 값에 따라 다른 UI */}
        <LoginTitle>
          {localStorage.getItem("token") ? "응시자 정보 입력" : "admin 로그인"}
        </LoginTitle>
        <InputBox>
          {/* token 값에 따라 다른 UI */}
          {localStorage.getItem("token") ? (
            <LoginInput
              name="name"
              type="text"
              placeholder="이름"
              value={name}
              onChange={({ target: { value } }) =>
                setData({
                  ...data,
                  name: value,
                })
              }
            />
          ) : (
            <LoginInput
              name="email"
              type="text"
              placeholder="이메일"
              value={email}
              onChange={({ target: { value } }) =>
                setData({
                  ...data,
                  email: value,
                })
              }
            />
          )}
          {/* token 값에 따라 다른 UI */}
          {localStorage.getItem("token") ? (
            <LoginInput
              name="email"
              type="text"
              placeholder="이메일"
              value={email}
              onChange={({ target: { value } }) =>
                setData({
                  ...data,
                  email: value,
                })
              }
            />
          ) : (
            <LoginInput
              name="pw"
              type="password"
              value={pw}
              placeholder="비밀번호"
              onChange={({ target: { value } }) =>
                setData({
                  ...data,
                  pw: value,
                })
              }
            />
          )}
          <LoginInput
            name="department"
            type="text"
            value={department}
            placeholder="지원부서"
            onChange={({ target: { value } }) =>
              setData({
                ...data,
                department: value,
              })
            }
            style={{
              display: localStorage.getItem("token") ? "block" : "none",
            }}
          />
        </InputBox>
        {localStorage.getItem("token") ? (
          <LoginBtn className="button" onClick={gotoMail}>
            보내기
          </LoginBtn>
        ) : (
          <LoginBtn className="button" onClick={gotoLogin}>
            로그인
          </LoginBtn>
        )}
      </LoginForm>
    </LoginComponent>
  );
};

const LoginComponent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: wheat;
`;

const LoginForm = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 3em 8em;
`;

const LoginTitle = styled.p`
  font-size: 2rem;
  margin: 0 auto;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const LoginInput = styled.input`
  border: 1px solid #000;
  padding: 1em;
  margin-top: 1em;
  border-radius: 5px;
`;
const LoginBtn = styled.p`
  margin: 1em auto 0;
  padding: 0.5em 0.5em;
  border: 1px solid #000;

  &:hover {
    cursor: pointer;
  }
`;

export default Login;
