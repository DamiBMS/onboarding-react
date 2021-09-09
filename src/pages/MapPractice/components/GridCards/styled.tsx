import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 20px;
`;

export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: 430px;
  border: 1px solid black;
`;

export const Image = styled.img`
  height: 230px;
  object-fit: cover;
`;
export const Title = styled.h4`
  padding-top: 30px;
  text-align: center;
  color: red;
`;
export const SubTitle = styled.h6`
  text-align: center;
  color: black;
`;
export const Text = styled.p`
  text-align: center;
`;
