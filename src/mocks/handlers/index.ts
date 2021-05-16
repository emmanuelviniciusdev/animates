import { handlers as authHandlers } from './auth'
import { handlers as matchHandlers } from './match'
import { handlers as messagesHandlers } from './messages'

export const handlers = [...authHandlers, ...matchHandlers, ...messagesHandlers]
