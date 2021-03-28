import React from 'react'
import { Button } from './styles'
import { Props } from './types'

function SimpleButton({
    size = 'md',
    btnTheme = 'primary',
    children,
}: Partial<Props>) {
    return (
        <Button size={size} btnTheme={btnTheme}>
            {children}
        </Button>
    )
}

export default SimpleButton
