export type HeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type LineWidth = 'auto' | 'greaterThanContent' | 'smallerThanContent'

export type ApplyFontWeightRegular = boolean

export type Props = {
    children: string | JSX.Element
    type: HeadingLevels
    lineWidth: LineWidth
    notifications?: number
    applyFontWeightRegular?: ApplyFontWeightRegular
}
