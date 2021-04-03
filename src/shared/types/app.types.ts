export type Nullable<T> = T | null | undefined

/**
 * Workaround to IconifyIcon interface not being exported by the main library.
 */
export type LocalIconifyIcon = {
    body: string
    left?: number
    top?: number
    width?: number
    height?: number
    rotate?: number
    hFlip?: boolean
    vFlip?: boolean
}
