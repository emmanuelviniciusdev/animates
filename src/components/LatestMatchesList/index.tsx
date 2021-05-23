import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import ReactTooltip from 'react-tooltip'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { getLatestMatches } from '../../redux/ducks/messages'
import { RootState } from '../../redux/store'
import { RoutePaths } from '../../routes'
import { PlaceholderLoadingItem } from '../../styles/commonStyles'
import { List, PetPicture } from './styles'

function LatestMatchesList() {
    const dispatch = useThunkDispatch()
    const history = useHistory()

    const { latestMatches } = useSelector((state: RootState) => state.messages)

    useEffect(() => {
        ReactTooltip.rebuild()
    })

    useEffect(() => {
        // TODO: Catch errors.
        dispatch(getLatestMatches())
    }, [dispatch])

    return (
        <>
            <ReactTooltip
                id="tooltip-latest-matches"
                place="bottom"
                effect="solid"
            />

            <List>
                {latestMatches.loading &&
                    Array.from({ length: 3 }).map((_, index) => (
                        <PlaceholderLoadingItem
                            className="loading-pet-picture"
                            key={index}
                        />
                    ))}

                {!latestMatches.loading &&
                    latestMatches.pets.map((pet) => (
                        <PetPicture
                            src={pet.photoUrl}
                            alt={pet.name}
                            data-for="tooltip-latest-matches"
                            data-tip={pet.name}
                            key={pet.id}
                            onClick={() =>
                                history.push(RoutePaths.CHAT(pet.id))
                            }
                        />
                    ))}
            </List>
        </>
    )
}

export default LatestMatchesList
