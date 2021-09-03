import React, { useEffect, useState } from 'react'
import {  CloseButton, Wrapper, Text } from './styled'

interface Props {
  message: string
  duration?: number | null;
}

export const MessageAlert = ({message, duration = null}: Props) => {
  // State con hook useStae para manejar el estado del component en on/off
  const [isOpen, setIsOpen] = useState(true);

  // Handler para cerrar el component
  const handleClose = () => setIsOpen(false);

  // Hook para manejar el tiempo de cierre del Alert si no lo cerras
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(handleClose, duration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
      {isOpen && (
        <Wrapper>
          <CloseButton  onClick={() => handleClose()}>
            x
          </CloseButton>

          <Text>{message}</Text>
        </Wrapper>
      )}
    </>
  )
}