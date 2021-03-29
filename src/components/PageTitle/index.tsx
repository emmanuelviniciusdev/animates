import React from 'react'
import { HeadingLevels, Props } from './types'
import { Line } from './styles'

function PageTitle({ type = 'h1', children }: Partial<Props>) {
    const HeadingTag = `${type}` as HeadingLevels

    return (
        <>
            <HeadingTag>{children}</HeadingTag>
            <Line />
        </>
    )
}

export default PageTitle
