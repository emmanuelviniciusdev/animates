import React from 'react'
import { Props } from './types'
import { Input, Line, WrapperInput, WrapperInputAndIcon } from './styles'
import { Icon } from '@iconify/react'

function AppInput({ icon, ...rest }: Props) {
    return (
        <>
            <WrapperInput className="wrapper-input">
                <WrapperInputAndIcon>
                    {icon && <Icon icon={icon} className="icon" />}
                    <Input {...rest} />
                </WrapperInputAndIcon>

                <Line />
            </WrapperInput>
        </>
    )
}

export default AppInput
