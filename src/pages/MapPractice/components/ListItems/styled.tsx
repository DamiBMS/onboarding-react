import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40vw;
`

export const ListWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  background: #f3f3f3;
  padding: 10px 20px;
`

export const Label = styled.p`
  font-size: 12px;
  text-transform: uppercase;
`

export const Value = styled.p`
  font-size: 14px;
  font-weight: bold;
`
