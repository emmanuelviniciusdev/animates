import { rest } from 'msw'
import { ResponseError, ResponseSuccess } from '../../shared/types/api.types'
import { Photo, PhotosFormData } from '../../shared/types/gallery.types'

const apiUrl = process.env.REACT_APP_BASE_API_URL

/**
 * Endpoint: "/photos".
 *
 * Não recebe nada.
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
export const photos = rest.get(`${apiUrl}/photos`, (req, res, ctx) => {
    const fakePhotos: Photo[] = Array.from({ length: 2 }).map((_, index) => ({
        id: index,
        petName: 'Tobby',
        url:
            'https://i.pinimg.com/originals/dd/52/75/dd5275a1b2f042faa13fda9fdb75765a.jpg',
        isProfilePicture: false,
    }))

    return new Promise((resolve) => {
        setTimeout(
            () =>
                resolve(
                    res(
                        ctx.status(200),
                        ctx.json({
                            data: { photos: fakePhotos },
                        } as ResponseSuccess)
                    )
                ),
            2000
        )
    })
})

/**
 * Endpoint: "/photos/upload".
 *
 * Recebe um form-data com a propriedade "photos[]", um array contendo todos os arquivos.
 *
 * Em caso de:
 * - Sucesso: retorna um "ResponseSuccess"
 * - Erro: retorna um "ResponseError"
 */
export const uploadPhotos = rest.post<PhotosFormData>(
    `${apiUrl}/photos/upload`,
    (req, res, ctx) => {
        const formDataPhotos =
            req.body['photos[]'] && !req.body['photos[]'].length
                ? [req.body['photos[]']]
                : req.body['photos[]']

        if (formDataPhotos.length === 0) {
            return res(
                ctx.status(400),
                ctx.json({
                    error: true,
                    message: 'Nenhuma foto recebida pelo servidor.',
                } as ResponseError)
            )
        }

        const fakePhotos: Photo[] = Array.from({
            length: formDataPhotos.length,
        }).map((_, index) => ({
            id: index,
            url:
                'https://i.pinimg.com/originals/2b/3c/91/2b3c9100d807d7895b8a055de90d503f.jpg',
            petName: 'Tobby',
            isProfilePicture: false,
        }))

        return new Promise((resolve) => {
            setTimeout(
                () =>
                    resolve(
                        res(
                            ctx.status(201),
                            ctx.json({
                                data: { photos: fakePhotos },
                            } as ResponseSuccess)
                        )
                    ),
                2000
            )
        })
    }
)

export const handlers = [uploadPhotos, photos]
