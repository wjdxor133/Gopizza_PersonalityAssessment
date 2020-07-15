import React from "react";
import styled from "styled-components";

const Category3rd = () => {
  return (
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
          <Q1tr>
            <td>A</td>
            <td>사건을 접하면 축소 해석하기 보다는 확대 해석하는 편이다.</td>
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
          </Q2tr>
          <Q3tr>
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
          </Q3tr>
          <Q4tr>
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
          </Q4tr>
          <Q5tr>
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
          </Q5tr>
        </Tbody>
      </table>
    </Test3CategoryWrap>
  );
};

export default Category3rd;

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
