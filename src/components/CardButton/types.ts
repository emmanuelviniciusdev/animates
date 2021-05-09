import { ButtonHTMLAttributes } from 'react'
import { LocalIconifyIcon } from '../../shared/types/app.types'

export type HasIconHeart = boolean

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: LocalIconifyIcon
    hasIconHeart: HasIconHeart
}
