import React from 'react'
import { SelectInput } from './styles'
import { Props } from './types'

function AppSelectInput({ ...rest }: Props) {
    return (
        <>
            <SelectInput {...rest} />
        </>
    )
}

export default AppSelectInput
