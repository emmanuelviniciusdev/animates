import { lighten } from 'polished'
import styled, { DefaultTheme } from 'styled-components'
import { BtnSize, BtnTheme } from './types'

const getBackgroundColor = (btnTheme: BtnTheme, theme: DefaultTheme) => {
    const backgroundColors = {
        primary: theme.bgPrimary,
        secondary: theme.bgSecondary,
    }

    return backgroundColors[btnTheme]
}

const fontSizes = {
    sm: '14px',
    md: '18px',
    lg: '24px',
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
`
