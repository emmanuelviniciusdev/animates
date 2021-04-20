export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type LineWidth = 'auto' | 'greaterThanContent' | 'smallerThanContent'

export type Props = {
    children: string
    type: HeadingLevels
    lineWidth: LineWidth
    notifications?: number
}
