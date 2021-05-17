import { Pet } from './pet.types'

export type WhoSentOrReceivedMessage = {
    userId: number
    pet: Pet
}

export type Message = {
    id: number
    whoSent: WhoSentOrReceivedMessage
    whoReceived: WhoSentOrReceivedMessage
    message: string
    created: Date
    seen: boolean
}

export type MessagesListPagination = {
    /**
     * The current position of the pagination.
     */
    position: number

    /**
     * The amount of messages being requested.
     */
    total: number
}
