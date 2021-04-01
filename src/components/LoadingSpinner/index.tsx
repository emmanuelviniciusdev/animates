import React from 'react'
import { Props } from './types'
import { LoadingSpinnerStyle } from './styles'

function LoadingSpinner({
    width,
    height,
    borderSize,
    backgroundColor,
    ...rest
}: Props) {
    return (
        <LoadingSpinnerStyle
            width={width}
            height={height}
            borderSize={borderSize}
            backgroundColor={backgroundColor}
            {...rest}
        />
    )
}

export default LoadingSpinner
