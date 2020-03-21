import styled from "styled-components";

export const Title = styled.div`
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  & input {
    margin-left: 35px;
  }
`;

export const Content = styled.div`
  height: 100%;
  text-align: center;
  display: block;
  & textarea {
    margin-left: 20px;
    height: 200px;
    width: 300px;
  }
`;
