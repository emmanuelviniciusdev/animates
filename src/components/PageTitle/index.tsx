import React from 'react'
import { HeadingLevels, Props } from './types'
import { Line, WrapperPageTitle } from './styles'

function PageTitle({
    type = 'h1',
    lineWidth = 'smallerThanContent',
    children,
}: Partial<Props>) {
    const HeadingTag = `${type}` as HeadingLevels

    return (
        <>
            <WrapperPageTitle>
                <HeadingTag>{children}</HeadingTag>
                <Line lineWidth={lineWidth} />
            </WrapperPageTitle>
        </>
    )
}

export default PageTitle
