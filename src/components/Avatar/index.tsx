import React from 'react';
import { AvatarWrap, AvatarImg, AvatarName, AvatarLetter} from './styled';

interface PropsImage {
  name: string;
  img?: string;
}

export const Avatar = ({ name, img }: PropsImage) => {
  const getCharacter = (name:string) => name.charAt(0);
  return (
    <AvatarWrap>
      {img ? <AvatarImg src={img}/> : <AvatarLetter>{getCharacter(name)}</AvatarLetter>}
      <AvatarName>{name}</AvatarName>
    </AvatarWrap>
  );
};

