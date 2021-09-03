import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 4px;
  background: #d1f6d1;
  padding: 10px 20px;
  align-items: center;
  margin: 30px 0;
`

export const IconNote = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  background: forestgreen;
`

export const Text = styled.p`
  font-size: 16px;
  color: #46643b;
`

export const Note = {
  Wrapper,
  IconNote,
  Text,
}