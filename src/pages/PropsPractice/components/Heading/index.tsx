import React from 'react'
import { HeadingStyled, NumberHeading, Wrapper } from './styled'

// Crear un Heading que reciba por props un title y opcional el número de resultados para tablas

interface Props {
  title: string
  numberRows?: number
}

export const Heading = ({title, numberRows}: Props) => {
  return (
    <Wrapper>
      <HeadingStyled>
        {title}
      </HeadingStyled>
      <NumberHeading>{`(${numberRows})`}</NumberHeading>
    </Wrapper>
  )

}