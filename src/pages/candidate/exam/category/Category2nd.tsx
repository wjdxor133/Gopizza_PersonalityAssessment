import React from "react";
import styled from "styled-components";

const Category2nd = () => {
  return (
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
          <Q1tr>
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
          </Q1tr>
          <Q2tr>
            <td>B</td>
            <td>
              나는 확실하지만 작은 이익보다는 불확실하더라도 큰 이익을 추구한다.
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
          </Q2tr>
          <Q3tr>
            <td>C</td>
            <td>
              오래 사귄 친구도 얼마든지 나를 속일 가능성이 있다고 생각한다.
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
              처음 생각하고 판단한 것이 나중에 판단한 것보다 옳다고 생각한다.
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
          </Q5tr>
        </Tbody>
      </table>
    </Test2CategoryWrap>
  );
};

export default Category2nd;

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
