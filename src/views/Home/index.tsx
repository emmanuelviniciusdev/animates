import React from 'react'
import { Header, LocalGlobalStyle, Main, Title } from './styles'
import SimpleButton from '../../components/SimpleButton'

function Home() {
    return (
        <>
            <LocalGlobalStyle />

            <Main>
                <Header>
                    <SimpleButton>Começar</SimpleButton>
                </Header>

                <Title>
                    AJUDE O SEU MELHOR AMIGO A ENCONTRAR UMA CARA-METADE
                </Title>
            </Main>
        </>
    )
}

export default Home
