import React, { forwardRef } from 'react'
import { Props } from './types'
import { Input, Line, WrapperInput, WrapperInputAndIcon } from './styles'
import { Icon } from '@iconify/react'

const AppInput = forwardRef<HTMLInputElement, Props>(
    ({ icon, ...rest }: Props, ref) => {
        return (
            <>
                <WrapperInput className="wrapper-input">
                    <WrapperInputAndIcon>
                        {icon && <Icon icon={icon} className="icon" />}
                        <Input ref={ref} {...rest} />
                    </WrapperInputAndIcon>

                    <Line />
                </WrapperInput>
            </>
        )
    }
)

export default AppInput
