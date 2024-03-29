import { lighten } from 'polished'
import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        bgDefault: string
        bgPrimary: string
        bgSecondary: string
        bgTertiary: string

        colorPrimary: string
        colorSecondary: string
        colorTertiary: string

        borderColorPrimary: string
        borderColorSecondary: string
    }
}

export const darkTheme: DefaultTheme = {
    bgDefault: '#302B2F',
    bgPrimary: '#FC4A1A',
    bgSecondary: '#232323',
    bgTertiary: lighten(0.06, '#302B2F'),

    colorPrimary: '#FFF',
    colorSecondary: '#CCC',
    colorTertiary: '#878787',

    borderColorPrimary: '#2c2c2c',
    borderColorSecondary: '#7C7C7C',
}
