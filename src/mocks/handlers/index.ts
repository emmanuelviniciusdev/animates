import { handlers as authHandlers } from './auth'
import { handlers as matchHandlers } from './match'
import { handlers as messagesHandlers } from './messages'
import { handlers as galleryHandlers } from './gallery'

export const handlers = [
    ...authHandlers,
    ...matchHandlers,
    ...messagesHandlers,
    ...galleryHandlers,
]
