import React, { useState } from 'react'
import { Button, CloseButton, Text, Wrapper } from './styled'

interface Props {
    message:string
}

export const Modal = ({message}: Props) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Click on me baby!</Button>
            {isOpen && (
                <Wrapper>
                    <CloseButton onClick={() => setIsOpen(false)}>
                        x
                    </CloseButton>

                    <Text>{message}</Text>
                </Wrapper>
            )}

        </>
    )
}