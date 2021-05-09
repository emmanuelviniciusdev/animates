import React, { useEffect } from 'react'
import { setPageTitle } from '../../shared/helpers'
import frenchBulldogJump from '../../assets/images/french-bulldog-jump.webp'
import { Main, Content, Img } from './styles'
import RoundedButton from '../../components/RoundedButton'
import arrowCircleLeftDuotone from '@iconify/icons-ph/arrow-circle-left-duotone'
import { useHistory } from 'react-router'
import { RoutePaths } from '../../routes'

function Pagina404() {
    useEffect(() => setPageTitle('Página não encontrada'), [])

    const history = useHistory()

    return (
        <>
            <Main>
                <Img
                    src={frenchBulldogJump}
                    alt="Cachorro da raça bulldog correndo e pulando entre animações de fogos e fumaças"
                />

                <Content>
                    <p>404</p>
                    <h1>Página não encontrada</h1>
                    <RoundedButton
                        hasShadow
                        icon={arrowCircleLeftDuotone}
                        onClick={() => history.push(RoutePaths.INICIO)}
                    >
                        voltar para o início
                    </RoundedButton>
                </Content>
            </Main>
        </>
    )
}

export default Pagina404
