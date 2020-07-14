import React, { useState } from "react";
import styled from "styled-components";
import Category1st from "./category/Category1st";
import Category2nd from "./category/Category2nd";
import Category3rd from "./category/Category3rd";
import Category4th from "./category/Category4th";

const obj: { [index: number]: object } = {
  0: <Category1st />,
  1: <Category2nd />,
  2: <Category3rd />,
  3: <Category4th />,
};

const Exam = () => {
  const [view, setView] = useState<number>(0);
  const SelectedTest = (num: number) => {
    return (event: React.MouseEvent<HTMLButtonElement>) => {
      setView(num);
    };
  };
  let objNum = obj[view];

  return (
    <ExamWrap>
      <Container>
        <BtnWrap>
          <Category1stBtn onClick={SelectedTest(0)}>TEST1</Category1stBtn>
          <Category2ndBtn onClick={SelectedTest(1)}>TEST2</Category2ndBtn>
          <Category3rdBtn onClick={SelectedTest(2)}>TEST3</Category3rdBtn>
          <Category4thBtn onClick={SelectedTest(3)}>TEST4</Category4thBtn>
        </BtnWrap>
        <Content>{objNum}</Content>
        <SubmitBtn>submit</SubmitBtn>
      </Container>
    </ExamWrap>
  );
};

export default Exam;

const ExamWrap = styled.section`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  margin-top: 10%;
  /* background-color: #ffe8e8; */
`;

const Content = styled.div``;

const BtnWrap = styled.div``;

const Category1stBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f86d0d;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 0.3em;
  &:hover {
    cursor: pointer;
    background-color: #fc8d44;
  }
`;
const Category2ndBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f86d0d;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 0.3em;
  &:hover {
    cursor: pointer;
    background-color: #fc8d44;
  }
`;
const Category3rdBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f86d0d;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 0.3em;
  &:hover {
    cursor: pointer;
    background-color: #fc8d44;
  }
`;
const Category4thBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #f86d0d;
  color: #fff;
  border-radius: 3px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  margin-left: 0.3em;
  &:hover {
    cursor: pointer;
    background-color: #fc8d44;
  }
`;

const SubmitBtn = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.5rem;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background-color: #fc9855;
  border-radius: 10px;
  position: absolute;
  right: 0;
  margin-right: 10%;
  margin-top: 5%;
  &:hover {
    cursor: pointer;
  }
`;
