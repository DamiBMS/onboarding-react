import React from 'react'
import { Container, Label, ListWrapper, Value } from './styled'

interface ItemProps {
  label: string
  value: number
}

interface Props {
  items: ItemProps[]
}

export const ListItems = ({items}: Props) => {
  return (
    <Container>
        {items.map((item) => (
          <ListWrapper>
            <Label>{item.label}</Label>
            <Value>{item.value}</Value>
          </ListWrapper>
          )
        )}
    </Container>
  )
}