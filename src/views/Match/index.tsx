import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import MatchCard from '../../components/MatchCard'
import LoadingMatchCard from '../../components/LoadingMatchCard'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content } from './styles'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { getNextPet } from '../../redux/ducks/match'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function Match() {
    const dispatch = useThunkDispatch()
    const { currentPet, loadingCurrentPet } = useSelector(
        (state: RootState) => state.match
    )

    useEffect(() => setPageTitle('Match'), [])

    useEffect(() => {
        dispatch(getNextPet())
    }, [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Match</PageTitle>

                <main>
                    <Content>
                        {loadingCurrentPet && <LoadingMatchCard />}

                        {!loadingCurrentPet && currentPet && (
                            <MatchCard pet={currentPet} />
                        )}

                        {/* TODO: Make a card for not found pet. */}
                        {!loadingCurrentPet && !currentPet && (
                            <p>Nenhum pet encontrado.</p>
                        )}
                    </Content>
                </main>
            </GeneralContent>
        </>
    )
}

export default Match
