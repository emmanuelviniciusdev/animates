import { lighten } from 'polished'
import styled from 'styled-components'

export const Button = styled.button`
    background-color: ${(props) => props.theme.bgPrimary};
    color: ${(props) => props.theme.colorPrimary};
    font-size: 18px;
    padding: 18px 28px;
    border-radius: 30px;

    &:disabled {
        background-color: ${(props) => lighten(0.1, props.theme.bgPrimary)};
        cursor: not-allowed;
        outline: none;
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
