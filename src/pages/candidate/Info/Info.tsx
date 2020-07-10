import React from "react";
import styled from "styled-components";

const Info = () => {
  return (
    <InfoWrap>
      <Container>
        <MainText>
          <p></p>
          <ul>
            <li></li>
            <li></li>
          </ul>
        </MainText>
        <SubText></SubText>
      </Container>
    </InfoWrap>
  );
};

export default Info;

const InfoWrap = styled.section`
  width: 100%;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
`;

const MainText = styled.div``;

const SubText = styled.div``;
