import { rest } from 'msw'
import { ResponseSuccess, ResponseError } from '../../shared/types/api.types'
import { MatchData } from '../../shared/types/match'

const apiUrl = process.env.REACT_APP_BASE_API_URL

/**
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

export const handlers = []
