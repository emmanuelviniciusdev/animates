import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        bgDefault: string
        bgPrimary: string
        bgSecondary: string

        colorPrimary: string
        colorSecondary: string
        colorTertiary: string

        borderColorPrimary: string
    }
}

export const darkTheme: DefaultTheme = {
    bgDefault: '#302B2F',
    bgPrimary: '#FC4A1A',
    bgSecondary: '#4D474B',

    colorPrimary: '#FFF',
    colorSecondary: '#CCC',
    colorTertiary: '#878787',

    borderColorPrimary: '#2c2c2c',
}
