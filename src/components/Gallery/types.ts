export type Modes = 'card-adocao' | 'account-settings'

export type Props = {
    mode: Modes
    onOpenUploadSection?: (state: boolean) => void
}
