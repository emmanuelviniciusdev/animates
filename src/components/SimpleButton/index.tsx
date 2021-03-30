import React from 'react'
import { Button } from './styles'
import { Props } from './types'

function SimpleButton({
    btnSize = 'md',
    btnTheme = 'primary',
    children,
}: Partial<Props>) {
    return (
        <Button btnSize={btnSize} btnTheme={btnTheme}>
            {children}
        </Button>
    )
}

export default SimpleButton
