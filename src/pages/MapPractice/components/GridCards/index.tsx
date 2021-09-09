import React from 'react';

import {
  Container,
  GridContainer,
  Image,
  Title,
  SubTitle,
  Text,
} from './styled';

interface ItemCards {
  image: string;
  title: string;
  subtitle: string;
  text: string;
}

interface PropsCards {
  props: ItemCards[];
}

export const GridCards = ({ props }: PropsCards) => {
  return (
    <Container>
      {props.map((prop) => (
        <GridContainer>
          <Image src={prop.image}></Image>
          <Title>{prop.title}</Title>
          <SubTitle>{prop.subtitle}</SubTitle>
          <Text>{prop.text}</Text>
        </GridContainer>
      ))}
    </Container>
  );
};
