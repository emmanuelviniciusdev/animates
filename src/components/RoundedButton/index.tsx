import React from 'react'
import { Props } from './types'
import { Button, ContentButton } from './styles'
import { Icon } from '@iconify/react'

function RoundedButton({
    isLoading = false,
    icon,
    children,
    ...rest
}: Partial<Props>) {
    return (
        <>
            <Button disabled={isLoading} {...rest}>
                <ContentButton>
                    {icon && <Icon icon={icon} className="icon" />}
                    <span>{isLoading ? 'Aguarde...' : children}</span>
                </ContentButton>
            </Button>
        </>
    )
}

export default RoundedButton
