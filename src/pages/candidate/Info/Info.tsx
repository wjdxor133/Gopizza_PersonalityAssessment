import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <InfoWrap>
      <Container>
        <MainText>
          <h1>
            <i className="fas fa-info"></i>검사 안내
          </h1>
          <ul>
            <li>
              본 검사는 여러자의 경험이나 가치 태도 등을 묻는 총 00 문항으로
              구성되어있습니다.
            </li>
            <li>
              최대 00 분간 응시 할 수 있으며, 00 분이 지나면 다 풀지 못하더라도
              검사가 종료됩니다.
            </li>
            <li>
              끝까지 검사를 마칠 수 있도록 시간 안배에 신경 쓰면서 빠른 속도로
              진행 하십시오.
            </li>
            <li>
              마음을 가다듬고 충분한 시간을 확보한 후 검사를 시작하십시오.
            </li>
          </ul>
        </MainText>
        <SubText>
          <h1>
            <i className="fas fa-info"></i>응시자 주의사항
          </h1>
          <ul>
            <li>한 문항도 빠뜨리지 말고 모든 문제에 성실하게 응답하십시오.</li>
          </ul>
        </SubText>
        <Link to="/exam">
          <button>시험 시작</button>
        </Link>
      </Container>
    </InfoWrap>
  );
};

export default Info;

const InfoWrap = styled.section`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 20%;
    font-size: 1.5rem;
    font-family: "Roboto", sans-serif;
    margin-top: 30px;
    padding: 5px 0;
    border: 1.5px solid orange;
    cursor: pointer;
    &:hover {
      background-color: orange;
      color: #fff;
    }
  }
`;

const MainText = styled.div`
  margin-bottom: 30px;
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1.1px;
    margin-bottom: 15px;
    i {
      font-size: 1.3rem;
      color: orange;
      margin-right: 5px;
    }
  }
  li {
    margin-bottom: 8px;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.6px;
  }
`;

const SubText = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    letter-spacing: 1.1px;
    margin-bottom: 15px;
    i {
      font-size: 1.3rem;
      color: orange;
      margin-right: 5px;
    }
  }
  li {
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.6px;
  }
`;
