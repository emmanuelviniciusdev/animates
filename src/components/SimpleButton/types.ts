import { HTMLProps } from 'react'

export type BtnSize = 'sm' | 'md' | 'lg'

export type BtnTheme = 'primary' | 'secondary'

export type Props = HTMLProps<HTMLButtonElement> & {
    btnSize: BtnSize
    btnTheme: BtnTheme
    children?: string
}
