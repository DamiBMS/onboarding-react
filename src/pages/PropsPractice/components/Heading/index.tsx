import React from 'react'
import { HeadingStyled, NumberHeading, Wrapper } from './styled'

// Crear un Heading que reciba por props un title y opcional el número de resultados para tablas

export const Heading = () => {
  return (
    <Wrapper>
      <HeadingStyled>
        Heading prop
      </HeadingStyled>
      <NumberHeading>number</NumberHeading>
    </Wrapper>
  )

}