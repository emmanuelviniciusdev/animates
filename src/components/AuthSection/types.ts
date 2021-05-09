import { LineWidth } from '../PageTitle/types'

export type Mode = 'login' | 'register' | 'forgot-password'

export type Props = {
    mode: Mode
    pageTitleLineWidth: LineWidth
}
