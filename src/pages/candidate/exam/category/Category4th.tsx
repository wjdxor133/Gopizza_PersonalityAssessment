import React from "react";
import styled from "styled-components";

const Category4th = () => {
  return (
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
          <Q1tr>
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
          </Q1tr>
          <Q2tr>
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
          </Q2tr>
          <Q3tr>
            <td>C</td>
            <td>
              나는 대체로 내 생각과 의견을 자유롭게 표현할 수 있다고 느낀다.
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
          </Q3tr>
          <Q4tr>
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
          </Q4tr>
          <Q5tr>
            <td>E</td>
            <td>
              어떤 일을 할 때, 내 생각대로 일을 처리하기 보다는 다른 사람의
              생각이나 처리 방식을 따를 때가 많다.
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
          </Q5tr>
        </Tbody>
      </table>
    </Test4CategoryWrap>
  );
};

export default Category4th;

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

const Q1tr = styled.tr`
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
const Q2tr = styled.tr`
  td {
    border: 1px solid #a0a0a0;
    &:nth-child(1) {
      padding: 10px;
      background-color: #f9f1ed;
      font-size: 0.4rem;
    }
    &:nth-child(2) {
      text-align: left;
      font-size: 0.8rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
      padding: 14px;
    }
  }
`;
const Q3tr = styled.tr`
  td {
    border: 1px solid #a0a0a0;
    &:nth-child(1) {
      padding: 10px;
      background-color: #f9f1ed;
      font-size: 0.4rem;
    }
    &:nth-child(2) {
      text-align: left;
      font-size: 0.8rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
      padding: 14px;
    }
  }
`;
const Q4tr = styled.tr`
  td {
    border: 1px solid #a0a0a0;
    &:nth-child(1) {
      padding: 10px;
      background-color: #f9f1ed;
      font-size: 0.4rem;
    }
    &:nth-child(2) {
      text-align: left;
      font-size: 0.8rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
      padding: 14px;
    }
  }
`;
const Q5tr = styled.tr`
  td {
    border: 1px solid #a0a0a0;
    &:nth-child(1) {
      padding: 10px;
      background-color: #f9f1ed;
      font-size: 0.4rem;
    }
    &:nth-child(2) {
      text-align: left;
      font-size: 0.8rem;
      font-family: "Roboto", sans-serif;
      letter-spacing: 1px;
      padding: 14px;
    }
  }
`;
