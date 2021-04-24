import { ButtonHTMLAttributes } from 'react'
import { LocalIconifyIcon } from '../../shared/types/app.types'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading: boolean
    icon?: LocalIconifyIcon
}
