import styled, { keyframes } from 'styled-components'
import { Props } from './types'

const ldsDualRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const LoadingSpinnerStyle = styled.div<Props>`
    display: inline-block;
    width: ${(props) => props.width ?? '80px'};
    height: ${(props) => props.height ?? '80px'};

    &:after {
        content: ' ';
        display: block;
        width: ${(props) => props.width ?? '80px'};
        height: ${(props) => props.height ?? '80px'};
        margin: 8px;
        border-radius: 50%;
        border: ${(props) => props.borderSize ?? '6px'} solid
            ${(props) => props.theme.bgPrimary};
        border-color: ${(props) => props.theme.bgPrimary} transparent
            ${(props) => props.theme.bgPrimary} transparent;
        animation: ${ldsDualRing} 1.2s linear infinite;
    }
`
