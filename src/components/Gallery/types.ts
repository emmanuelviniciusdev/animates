import { Photo } from '../../shared/types/gallery.types'

export type Modes = 'card-adocao' | 'account-settings'

export type Props = {
    mode: Modes
    photos: Photo[]
    loading: boolean
    onOpenUploadSection?: (state: boolean) => void
}
