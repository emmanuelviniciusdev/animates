import { ButtonHTMLAttributes } from 'react'

export type BtnSize = 'sm' | 'md' | 'lg'
export type BtnTheme = 'primary' | 'secondary'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    btnSize: BtnSize
    btnTheme: BtnTheme
    isLoading: boolean
}
