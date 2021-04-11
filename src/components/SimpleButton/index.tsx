import React from 'react'
import { Button } from './styles'
import { Props } from './types'

function SimpleButton({
    btnSize = 'md',
    btnTheme = 'primary',
    isLoading = false,
    children,
    ...rest
}: Partial<Props>) {
    return (
        <Button
            disabled={isLoading}
            btnSize={btnSize}
            btnTheme={btnTheme}
            {...rest}
        >
            {isLoading ? 'Aguarde...' : children}
        </Button>
    )
}

export default SimpleButton
