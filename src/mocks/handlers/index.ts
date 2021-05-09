import { handlers as authHandlers } from './auth'
import { handlers as matchHandlers } from './match'

export const handlers = [...authHandlers, ...matchHandlers]
