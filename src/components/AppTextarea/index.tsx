import React from 'react'
import { Textarea } from './styles'
import { Props } from './types'

function AppTextarea({ ...rest }: Props) {
    return (
        <>
            <Textarea {...rest} />
        </>
    )
}

export default AppTextarea
