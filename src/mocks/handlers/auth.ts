import { rest } from 'msw'
import { LoginData } from '../../shared/types/auth.types'

/**
 * Login credentials:
 * email: admin@email.com
 * password: 123
 */
const login = rest.post<LoginData>(
    'http://localhost:3000/login',
    (req, res, ctx) => {
        const { email, password } = req.body

        if (email !== 'admin@email.com' || password !== '123') {
            return res(
                ctx.status(401),
                ctx.json({
                    message: 'e-mail ou senha inválidos',
                })
            )
        }

        return res(
            ctx.status(200),
            ctx.json({
                token: 'some-access-token',
            })
        )
    }
)

export const handlers = [login]
