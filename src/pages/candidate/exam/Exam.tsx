import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API } from "../../../config";

const Exam = () => {
  const [data, setData] = useState<any>([]);
  const [select, setSelect] = useState<any>({
    A: {
      id: "",
      point: "",
    },
    B: {
      id: "",
      point: "",
    },
    C: {
      id: "",
      point: "",
    },
    D: {
      id: "",
      point: "",
    },
  });

  useEffect(() => {
    axios
      // .get(`${API}eval/question`)
      .get("/data/data.json")
      .then((res) => {
        setData(res.data.data);
      });
    //   .catch((error) => {
    //   console.log(error.res);
    // });
  }, []);

  return (
    <ExamWrap>
      <Container>
        <Content>
          <CategoryWrap>
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
                {data.length &&
                  data.map((el: any, idx: number) => {
                    return (
                      <Qtr>
                        <td>{el.section}</td>
                        <td>{el.question}</td>
                        <td>
                          <input
                            type="radio"
                            name={`Cetegory${idx}`}
                            id={`${idx}`}
                            value={el.section}
                            // onChange={({ target: { id } }) => setSelect({})}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`Cetegory${idx}`}
                            value={el.section}
                            // onChange={({ target: {} }) => setSelect({})}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`Cetegory${idx}`}
                            value={el.section}
                            // onChange={({ target: {} }) => setSelect({})}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`Cetegory${idx}`}
                            value={el.section}
                            // onChange={({ target: {} }) => setSelect({})}
                          />
                        </td>
                        <td>
                          <input
                            type="radio"
                            name={`Cetegory${idx}`}
                            value={el.section}
                            // onChange={({ target: {} }) => setSelect({})}
                          />
                        </td>
                      </Qtr>
                    );
                  })}
              </Tbody>
            </table>
          </CategoryWrap>
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
  margin-bottom: 5%;
  &:hover {
    cursor: pointer;
    background-color: #f9873b;
  }
`;

const Content = styled.div``;

const CategoryWrap = styled.section`
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
