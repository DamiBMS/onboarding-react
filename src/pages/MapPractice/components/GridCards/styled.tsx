import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: ${props => props.theme.space.m};
  column-gap: ${props => props.theme.space.s};
  max-width: 1200px;
  margin: auto;
`;
export const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 374px;
  height: 435px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`;
export const Image = styled.img`
  height: 230px;
  object-fit: cover;
`;
export const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.base};
  margin-bottom:0;
  margin-top:0;
`;
export const SubTitle = styled.p`
  margin:0;
`;
export const Text = styled.p`
  padding: ${props => props.theme.space.m};
`;
export const Header = styled.div`
  padding-left: ${props => props.theme.space.s};
  padding-top: ${props => props.theme.space.s};
  display:grid;
  align-items:center;
  grid-template-columns: 40px 1fr;
`
export const HeaderTitle = styled.div `
  margin-left: ${props => props.theme.space.s};
`
