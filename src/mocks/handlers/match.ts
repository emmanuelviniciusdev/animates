import { rest } from 'msw'
import { ResponseSuccess, ResponseError } from '../../shared/types/api.types'
import { MatchData } from '../../shared/types/match.types'
import { Pet } from '../../shared/types/pet.types'

const apiUrl = process.env.REACT_APP_BASE_API_URL

/**
 * Endpoint: "/match".
 *
 * Envia um objeto "MatchData".
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
export const match = rest.post<Partial<MatchData>>(
    `${apiUrl}/match`,
    (req, res, ctx) => {
        const { petId, action } = req.body

        if (!petId || !action) {
            return res(
                ctx.status(400),
                ctx.json({
                    error: true,
                    message: 'Parâmetros [petId] ou [action] não informados.',
                } as ResponseError)
            )
        }

        return res(ctx.status(200), ctx.json({ data: true } as ResponseSuccess))
    }
)

/**
 * Endpoint: "/get_next_pet".
 *
 * Não envia nada. Próximo pet é detectado usando o ID do usuário que está dentro
 * do token de acesso.
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
const fakePets: Pet[] = [
    {
        id: 1,
        name: 'Tobby',
        photoUrl:
            'https://direct.rhapsody.com/imageserver/images/alb.468470225/500x500.jpg',
        dateOfBirth: new Date('2021-01-01'),
        description: '',
    },
    {
        id: 2,
        name: 'Bolinha',
        photoUrl: 'https://i.redd.it/s0rrluzbe1v01.jpg',
        dateOfBirth: new Date('2019-06-20'),
        description: '',
    },
    {
        id: 3,
        name: 'Tobias',
        photoUrl:
            'https://static.boredpanda.com/blog/wp-content/uploads/2021/01/happy-doggo-60101d7be4631__700.jpg',
        dateOfBirth: new Date('2011-03-10'),
        description: '',
    },
]

let fakePetsIndex = -1

export const getNextPet = rest.post(
    `${apiUrl}/get_next_pet`,
    (req, res, ctx) => {
        fakePetsIndex++

        return new Promise((resolve) => {
            setTimeout(() => {
                // resolve(
                //     res(
                //         ctx.status(400),
                //         ctx.json({
                //             error: true,
                //             message:
                //                 'Não foi possível retornar um novo pet. Por favor, tente novamente mais tarde.',
                //         } as ResponseError)
                //     )
                // )

                resolve(
                    res(
                        ctx.status(200),
                        ctx.json({
                            data: fakePets[fakePetsIndex] ?? null,
                        } as ResponseSuccess)
                    )
                )
            }, 2000)
        })
    }
)

export const handlers = [match, getNextPet]
