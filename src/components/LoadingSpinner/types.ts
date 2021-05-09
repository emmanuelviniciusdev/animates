import { HTMLAttributes } from 'react'

export type Props = HTMLAttributes<HTMLDivElement> & {
    width?: string
    height?: string
    borderSize?: string
    backgroundColor?: string
}
