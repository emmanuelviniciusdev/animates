import React from 'react'
import { Button, ContentButton } from './styles'
import { Props } from './types'
import { Icon } from '@iconify/react'

function SimpleButton({
    btnSize = 'md',
    btnTheme = 'primary',
    isLoading = false,
    icon,
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
            <ContentButton>
                {icon && <Icon icon={icon} className="icon" />}
                <span>{isLoading ? 'Aguarde...' : children}</span>
            </ContentButton>
        </Button>
    )
}

export default SimpleButton
