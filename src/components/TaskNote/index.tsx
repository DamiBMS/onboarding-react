import React from 'react'
import { Note } from './styled'

interface Props {
  task: string
  icon?: React.ReactElement | string
}

export const TaskNote = ({task, icon }: Props) => {
  return (
    <Note.Wrapper>
      {icon ? icon : <Note.IconNote />}
      <Note.Text><strong>TASK: </strong> {task}</Note.Text>
    </Note.Wrapper>
  )
}