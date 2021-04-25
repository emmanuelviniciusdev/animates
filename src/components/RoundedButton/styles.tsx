import { lighten } from 'polished'
import styled from 'styled-components'
import { HasShadow } from './types'

const boxShadowStyle = `-10px -10px 20px rgba(255, 255, 255, 0.1),
10px 10px 20px rgba(252, 74, 26, 0.25)`

export const Button = styled.button<{ hasShadow: HasShadow }>`
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.colorPrimary};
    font-size: 18px;
    padding: 18px 28px;
    border-radius: 30px;
    box-shadow: ${(props) => (props.hasShadow ? boxShadowStyle : 'none')};

    &:disabled {
        background-color: ${(props) => lighten(0.1, props.theme.bgPrimary)};
        cursor: not-allowed;
        outline: none;
        box-shadow: none;
    }

    .icon {
        font-size: 23px;
    }
`

export const ContentButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`
