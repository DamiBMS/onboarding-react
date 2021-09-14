import React from 'react';
import { AvatarImg } from '../../../../components/Avatar/styled'; 


import {
  Container,
  GridContainer,
  Image,
  Title,
  SubTitle,
  Text,
  Header,
  HeaderTitle,
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


//key es mas para un id del map (key={index})


export const GridCards = ({ props }: PropsCards) => {
  return (
    <Container>
      {props.map((prop) => (
        <GridContainer>
          <Image src={prop.image}></Image>
          <Header>
            <AvatarImg src={prop.image}/>
            <HeaderTitle>
              <Title>{prop.title}</Title>
              <SubTitle>{prop.subtitle}</SubTitle>
            </HeaderTitle>    
          </Header>
          <Text>{prop.text}</Text>
        </GridContainer>
      ))}
    </Container>
  );
};
