import { ButtonHTMLAttributes } from 'react'
import { LocalIconifyIcon } from '../../shared/types/app.types'

export type HasShadow = boolean

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isLoading: boolean
    hasShadow: HasShadow
    icon?: LocalIconifyIcon
}
