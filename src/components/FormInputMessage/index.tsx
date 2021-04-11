import React from 'react'
import { Props } from './types'
import { Content } from './styles'
import { Icon } from '@iconify/react'
import warningDuotone from '@iconify/icons-ph/warning-duotone'

// TODO: Improve this component implementing themes like: "error", "warning", "info" etc.

function FormInputMessage({ message, ...rest }: Props) {
    return (
        <>
            <Content {...rest} className="form-input-message">
                <Icon icon={warningDuotone} className="icon" />
                <p>{message}</p>
            </Content>
        </>
    )
}

export default FormInputMessage
