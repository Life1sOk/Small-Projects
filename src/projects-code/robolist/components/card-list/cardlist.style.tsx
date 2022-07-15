import styled from "styled-components";

export const CardListContainer = styled.div`
  width: 85vw;
  margin: auto;
  padding-bottom: 70px;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media only screen and (max-width: 1188px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 869px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 555px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;