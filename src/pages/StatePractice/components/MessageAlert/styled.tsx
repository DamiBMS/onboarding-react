import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 30vw;
  background: #f1e8e8;
  border-radius: 4px;
  padding: 10px 20px;
  min-height: 100px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 20px;
  height: 20px;
  box-shadow: none;
  border: none;
  background: transparent;
  color: gray;
  cursor: pointer;
`

export const Text = styled.p`
  color: #545454;
`