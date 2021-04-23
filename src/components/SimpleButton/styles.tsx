import { lighten } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import { BtnSize, BtnTheme } from './types'

const getBackgroundColor = (btnTheme: BtnTheme, theme: DefaultTheme) => {
    const backgroundColors = {
        primary: theme.bgPrimary,
        secondary: theme.bgSecondary,
        tertiary: lighten(0.06, theme.bgDefault),
    }

    return backgroundColors[btnTheme]
}

const fontSizes = {
    sm: '14px',
    md: '18px',
    lg: '24px',
}

const fontSizesIcon = {
    sm: '20px',
    md: '24px',
    lg: '30px',
}

export const Button = styled.button<{ btnSize: BtnSize; btnTheme: BtnTheme }>`
    background-color: ${({ btnTheme, theme }) =>
        getBackgroundColor(btnTheme, theme)};
    color: ${(props) => props.theme.colorPrimary};
    font-size: ${({ btnSize }) => fontSizes[btnSize]};
    font-weight: 400;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;

    &:disabled {
        background-color: ${(props) =>
            lighten(0.1, getBackgroundColor(props.btnTheme, props.theme))};
        cursor: not-allowed;
        outline: none;
    }

    .icon {
        font-size: ${({ btnSize }) => fontSizesIcon[btnSize]};
    }
`

export const ContentButton = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`
