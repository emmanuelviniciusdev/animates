import React from 'react'
import { Button } from './styles'
import { Props } from './types'
import { Icon } from '@iconify/react'

function CardButton({
    icon,
    hasIconHeart = false,
    children,
    ...rest
}: Partial<Props>) {
    return (
        <>
            <Button {...rest} hasIconHeart={hasIconHeart}>
                {icon && <Icon icon={icon} className="icon" />}
                {children}
            </Button>
        </>
    )
}

export default CardButton
