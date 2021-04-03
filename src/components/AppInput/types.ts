import { InputHTMLAttributes } from 'react'
import { LocalIconifyIcon } from '../../shared/types/app.types'

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    icon?: LocalIconifyIcon
}
