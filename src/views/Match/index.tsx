import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import MatchCard from '../../components/MatchCard'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content } from './styles'

function Match() {
    useEffect(() => setPageTitle('Match'), [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Match</PageTitle>

                <main>
                    <Content>
                        <MatchCard />
                    </Content>
                </main>
            </GeneralContent>
        </>
    )
}

export default Match
