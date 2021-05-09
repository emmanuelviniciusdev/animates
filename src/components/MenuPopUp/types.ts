export type Modes = 'more-options' | 'notifications'

export type Props = {
    mode: Modes
    onClose: () => void
}
