import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import AdocaoCard from '../../components/AdocaoCard'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content } from './styles'

function Adocao() {
    useEffect(() => setPageTitle('Adoção'), [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Adoção</PageTitle>

                <main>
                    <Content>
                        <AdocaoCard />
                        <AdocaoCard />
                        <AdocaoCard />
                        <AdocaoCard />
                    </Content>
                </main>
            </GeneralContent>
        </>
    )
}

export default Adocao
