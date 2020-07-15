import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
// import Category1st from "./category/Category1st";
// import Category2nd from "./category/Category2nd";
// import Category3rd from "./category/Category3rd";
// import Category4th from "./category/Category4th";

const Exam = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    axios.get("/data/data.json").then((res) => {
      setData(res.data.data);
    });
  }, []);
  console.log("data", data);

  return (
    <ExamWrap>
      <Container>
        <Content>
          <Test1CategoryWrap>
            <table>
              <Thead>
                <tr>
                  <th colSpan={2} style={{ width: "40%", height: "5%" }}>
                    문항
                  </th>
                  <th>매우 그렇지 않다.</th>
                  <th>약간 그렇지 않다.</th>
                  <th>보통 이다.</th>
                  <th>약간 그렇다.</th>
                  <th>매우 그렇다.</th>
                </tr>
              </Thead>
              <Tbody>
                <Qtr>
                  <td>A</td>
                  <td>
                    나는 의사결정을 하기 전에 모든 관점에서 문제를 신중히
                    생각한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>B</td>
                  <td>나는 명령을 하고 일을 진행시키기를 좋아한다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>C</td>
                  <td>나는 활동 계획을 미리 짜기를 좋아한다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>D</td>
                  <td>
                    나는 낯선 사람들을 만나면 무슨 이야기를 할지 어려움을
                    겪는다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>E</td>
                  <td>
                    나는 좋은 의도라고 하더라도 거짓말을 하지 않으려고 노력한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-5" />
                  </td>
                </Qtr>
              </Tbody>
            </table>
          </Test1CategoryWrap>
          <Test2CategoryWrap>
            <table>
              <Thead>
                <tr>
                  <th colSpan={2} style={{ width: "40%", height: "5%" }}>
                    문항
                  </th>
                  <th>매우 그렇지 않다.</th>
                  <th>약간 그렇지 않다.</th>
                  <th>보통 이다.</th>
                  <th>약간 그렇다.</th>
                  <th>매우 그렇다.</th>
                </tr>
              </Thead>
              <Tbody>
                <Qtr>
                  <td>A</td>
                  <td>
                    남들과 똑같이 하기 보다는 남들과 다른 새로운 방법을 생각해
                    보곤한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>B</td>
                  <td>
                    나는 확실하지만 작은 이익보다는 불확실하더라도 큰 이익을
                    추구한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>C</td>
                  <td>
                    오래 사귄 친구도 얼마든지 나를 속일 가능성이 있다고
                    생각한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>D</td>
                  <td>
                    처음 생각하고 판단한 것이 나중에 판단한 것보다 옳다고
                    생각한다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>E</td>
                  <td>상대방과 의견이 다르면 설득하려고 노력한다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-5" />
                  </td>
                </Qtr>
              </Tbody>
            </table>
          </Test2CategoryWrap>
          <Test3CategoryWrap>
            <table>
              <Thead>
                <tr>
                  <th colSpan={2} style={{ width: "40%", height: "5%" }}>
                    문항
                  </th>
                  <th>매우 그렇지 않다.</th>
                  <th>약간 그렇지 않다.</th>
                  <th>보통 이다.</th>
                  <th>약간 그렇다.</th>
                  <th>매우 그렇다.</th>
                </tr>
              </Thead>
              <Tbody>
                <Qtr>
                  <td>A</td>
                  <td>
                    사건을 접하면 축소 해석하기 보다는 확대 해석하는 편이다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>B</td>
                  <td>나는 화나게 하는 사람에게 물건을 집어 던진 적이 있다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>C</td>
                  <td>문제가 생기면 나는 상대의 입장을 생각한다. </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>D</td>
                  <td>다른 사람에게는 없는 생각이나 신념을 갖고있다. </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>E</td>
                  <td>나는 다른 사람들에 의해 통제받고 억압받는다고 느낀다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-5" />
                  </td>
                </Qtr>
              </Tbody>
            </table>
          </Test3CategoryWrap>
          <Test4CategoryWrap>
            <table>
              <Thead>
                <tr>
                  <th colSpan={2} style={{ width: "40%", height: "5%" }}>
                    문항
                  </th>
                  <th>매우 그렇지 않다.</th>
                  <th>약간 그렇지 않다.</th>
                  <th>보통 이다.</th>
                  <th>약간 그렇다.</th>
                  <th>매우 그렇다.</th>
                </tr>
              </Thead>
              <Tbody>
                <Qtr>
                  <td>A</td>
                  <td>내 일은 대부분 내가 스스로 결정한다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ1" value="Q1-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>B</td>
                  <td>일상생활에서 나는 자주 남이 시키는 대로 해야만 한다.</td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ2" value="Q2-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>C</td>
                  <td>
                    나는 대체로 내 생각과 의견을 자유롭게 표현할 수 있다고
                    느낀다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ3" value="Q3-1" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>D</td>
                  <td>
                    나는 내가 내 인생을 어떻게 살아갈지 스스로 결정 할 수 있다고
                    느낀다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ4" value="Q4-5" />
                  </td>
                </Qtr>
                <Qtr>
                  <td>E</td>
                  <td>
                    어떤 일을 할 때, 내 생각대로 일을 처리하기 보다는 다른
                    사람의 생각이나 처리 방식을 따를 때가 많다.
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-1" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-2" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-3" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-4" />
                  </td>
                  <td>
                    <input type="radio" name="Cetegory1stQ5" value="Q5-5" />
                  </td>
                </Qtr>
              </Tbody>
            </table>
          </Test4CategoryWrap>
        </Content>
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

const Content = styled.div``;

const Test1CategoryWrap = styled.section`
  width: 100%;
  margin-top: 5%;
  table {
    width: 100%;
    margin: 0 auto;
    border-top: 1.8px solid #ff355a;
    text-align: center;
  }
`;
const Test2CategoryWrap = styled.section`
  width: 100%;
  margin-top: 5%;
  table {
    width: 100%;
    margin: 0 auto;
    border-top: 1.8px solid #ff355a;
    text-align: center;
  }
`;
const Test3CategoryWrap = styled.section`
  width: 100%;
  margin-top: 5%;
  table {
    width: 100%;
    margin: 0 auto;
    border-top: 1.8px solid #ff355a;
    text-align: center;
  }
`;
const Test4CategoryWrap = styled.section`
  width: 100%;
  margin-top: 5%;
  table {
    width: 100%;
    margin: 0 auto;
    border-top: 1.8px solid #ff355a;
    text-align: center;
  }
`;

const Thead = styled.thead`
  font-family: "Roboto", sans-serif;

  tr {
    th {
      border-bottom: 1px solid #a0a0a0;
      border: 1px solid #a0a0a0;
      padding: 10px 0;
      font-size: 0.5rem;
      &:nth-child(1) {
        font-size: 1rem;
      }
    }
  }
`;

const Tbody = styled.tbody`
  font-family: "Roboto", sans-serif;
`;

const Qtr = styled.tr`
  td {
    border: 1px solid #a0a0a0;
    &:nth-child(1) {
      padding: 10px;
      background-color: #f9f1ed;
      font-size: 0.4rem;
      width: 2%;
    }
    &:nth-child(2) {
      text-align: left;
      font-size: 0.8rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
      padding: 14px;
      width: 45%;
    }
  }
`;
