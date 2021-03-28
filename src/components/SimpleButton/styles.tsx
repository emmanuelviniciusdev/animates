import styled, { DefaultTheme } from 'styled-components'
import { BtnTheme, Props } from './types'

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

export const Button = styled.button<Props>`
    background-color: ${({ btnTheme, theme }) =>
        getBackgroundColor(btnTheme, theme)};
    color: ${(props) => props.theme.colorPrimary};
    font-size: ${({ size }) => fontSizes[size]};
    font-weight: 400;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 10px;
`
