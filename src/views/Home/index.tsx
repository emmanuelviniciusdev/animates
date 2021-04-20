import React from 'react'
import { Header, LocalGlobalStyle, Main, Title } from './styles'
import SimpleButton from '../../components/SimpleButton'
import { Link } from 'react-router-dom'
import { RoutePaths } from '../../routes'

function Home() {
    return (
        <>
            <LocalGlobalStyle />

            <Main>
                <Header>
                    <Link to={RoutePaths.LOGIN}>
                        <SimpleButton>Começar</SimpleButton>
                    </Link>
                </Header>

                <Title>
                    AJUDE O SEU MELHOR AMIGO A ENCONTRAR UMA CARA-METADE
                </Title>
            </Main>
        </>
    )
}

export default Home
