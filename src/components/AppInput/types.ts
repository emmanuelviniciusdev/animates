import { InputHTMLAttributes } from 'react'

/**
 * Workaround to IconifyIcon interface not being exported by the main library.
 */
type LocalIconifyIcon = {
    body: string
    left?: number
    top?: number
    width?: number
    height?: number
    rotate?: number
    hFlip?: boolean
    vFlip?: boolean
}

export type Props = InputHTMLAttributes<HTMLInputElement> & {
    icon?: LocalIconifyIcon
}
