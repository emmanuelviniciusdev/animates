import { rest } from 'msw'
import { ResponseSuccess } from '../../shared/types/api.types'
import { Pet } from '../../shared/types/pet.types'
import {
    Message,
    MessagesListPagination,
} from '../../shared/types/message.types'

const apiUrl = process.env.REACT_APP_BASE_API_URL_FOR_MOCKING

/**
 * Endpoint: "/list_messages".
 *
 * Recebe um objeto "MessagesListPagination".
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
const fakePet: Pet = {
    id: Math.random(),
    name: 'Tobby',
    description: '',
    photoUrl:
        'https://direct.rhapsody.com/imageserver/images/alb.468470225/500x500.jpg',
    dateOfBirth: new Date(),
}

const fakeMessages: Message[] = Array.from({ length: 15 }).map((_, index) => ({
    id: index,
    whoSent: {
        userId: 1,
        pet: fakePet,
    },
    whoReceived: {
        userId: 2,
        pet: fakePet,
    },
    message:
        'Aenean laoreet eget sapien vitae laoreet. In vulputate nulla enim, sodales efficitur nunc ornare euismod. Cras at diam urna. Mauris vestibulum nisi non accumsan posuere.',
    seen: index % 2 === 0,
    created: new Date(),
}))

export const listMessages = rest.get<MessagesListPagination>(
    `${apiUrl}/list_messages`,
    (req, res, ctx) => {
        const position = Number(req.url.searchParams.get('position'))

        const sliceStart = position === 1 ? 0 : 10
        const sliceEnd = position === 1 ? 10 : 20

        return new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve(
                        res(
                            ctx.status(200),
                            ctx.json({
                                data: {
                                    messages: fakeMessages.slice(
                                        sliceStart,
                                        sliceEnd
                                    ),
                                    total: fakeMessages.length,
                                },
                            } as ResponseSuccess)
                        )
                    ),
                2500
            )
        )
    }
)

/**
 * Endpoint: "/latest_matches".
 *
 * Não recebe nada.
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
export const latestMatches = rest.get(
    `${apiUrl}/latest_matches`,
    (req, res, ctx) => {
        const pets: Pet[] = Array.from({ length: 8 }).map((_, index) => ({
            id: index,
            name: 'Tobby',
            photoUrl:
                'https://direct.rhapsody.com/imageserver/images/alb.468470225/500x500.jpg',
            dateOfBirth: new Date('2019-01-01'),
            description: '',
        }))

        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve(
                        res(
                            ctx.status(200),
                            ctx.json({
                                data: {
                                    pets,
                                },
                            } as ResponseSuccess)
                        )
                    ),
                2000
            )
        })
    }
)

export const handlers = [latestMatches, listMessages]
