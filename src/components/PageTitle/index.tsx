import React from 'react'
import { Text, Wrapper } from './styled'

interface Props {
  pageTitle: string
}

export const PageTitle = ({pageTitle}: Props) => {
  return (
    <Wrapper>
      <Text>{pageTitle}</Text>
    </Wrapper>
  )
}