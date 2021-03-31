import React from 'react'
import { Button } from './styles'
import { Props } from './types'

function SimpleButton({
    btnSize = 'md',
    btnTheme = 'primary',
    children,
    ...rest
}: Partial<Props>) {
    return (
        <Button {...rest} btnSize={btnSize} btnTheme={btnTheme}>
            {children}
        </Button>
    )
}

export default SimpleButton
