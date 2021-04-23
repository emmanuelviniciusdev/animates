import { ButtonHTMLAttributes } from 'react'
import { LocalIconifyIcon } from '../../shared/types/app.types'

export type BtnSize = 'sm' | 'md' | 'lg'
export type BtnTheme = 'primary' | 'secondary' | 'tertiary'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    btnSize: BtnSize
    btnTheme: BtnTheme
    isLoading: boolean
    icon?: LocalIconifyIcon
}
