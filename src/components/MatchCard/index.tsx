import React, { useState } from 'react'
import {
    Actions,
    WrapperCard,
    Card,
    Information,
    InformationSeparator,
    Picture,
    ReportButton,
} from './styles'
import { Icon } from '@iconify/react'
import heartFill from '@iconify/icons-ph/heart-fill'
import xBold from '@iconify/icons-ph/x-bold'
import warningDuotone from '@iconify/icons-ph/warning-duotone'
import CardButton from '../CardButton'
import ReactTooltip from 'react-tooltip'
import { motion, PanInfo } from 'framer-motion'
import { toast } from 'react-toastify'
import { Props } from './types'
import useThunkDispatch from '../../hooks/useThunkDispatch'
import { match, setCurrentPet } from '../../redux/ducks/match'
import { handleRegularErrorMessage } from '../../shared/helpers'
import moment from 'moment'
import ReportModal from '../ReportModal'

function MatchCard({ pet }: Props) {
    const dispatch = useThunkDispatch()
    const [cardWhileDragRotate, setCardWhileDragRotate] = useState(0)
    const [openReportModal, setOpenReportModal] = useState(false)

    const getPetAgeText = () => {
        const petAgeYears = moment().diff(pet.dateOfBirth, 'years')
        const petAgeMonths = moment().diff(pet.dateOfBirth, 'months')

        const petAgeYearsText = petAgeYears > 1 ? 'anos' : 'ano'
        const petAgeMonthsText = petAgeMonths > 1 ? 'meses' : 'mês'

        if (petAgeYears > 0) return petAgeYears + ' ' + petAgeYearsText

        return petAgeMonths + ' ' + petAgeMonthsText
    }

    const lovePet = () => {
        toast.dark(
            () => (
                <span>
                    ❤️ Solicitação de match enviada com sucesso para o(a){' '}
                    <b>{pet.name}!</b>
                </span>
            ),
            {
                hideProgressBar: true,
                position: 'top-right',
            }
        )

        dispatch(match({ petId: pet.id, action: 'love' })).catch(
            handleMatchError
        )
    }

    const skipPet = () => {
        dispatch(match({ petId: pet.id, action: 'skip' })).catch(
            handleMatchError
        )
    }

    const handleMatchError = (error: any) => {
        dispatch(setCurrentPet(null))
        handleRegularErrorMessage(error, 'toast-error-match-card')
    }

    const matchProcess = (
        event: MouseEvent | TouchEvent | PointerEvent,
        info: PanInfo
    ) => {
        const petWasLoved = info.offset.x >= 180 && info.point.x !== 0
        const petWasSkipped = info.offset.x <= -180 && info.point.x !== 0

        const vibrateDevice = petWasLoved || petWasSkipped

        if (vibrateDevice) window.navigator.vibrate(100)

        if (petWasLoved) lovePet()

        if (petWasSkipped) skipPet()
    }

    return (
        <>
            <ReactTooltip id="tooltip-match-card" effect="solid" />

            <>
                <motion.div
                    drag="x"
                    dragConstraints={{
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                    }}
                    dragElastic={0.7}
                    whileDrag={{
                        rotate: cardWhileDragRotate,
                        cursor: 'grabbing',
                    }}
                    onDrag={(event, info) =>
                        setCardWhileDragRotate(info.offset.x >= 0 ? 5 : -5)
                    }
                    onDragEnd={matchProcess}
                >
                    <WrapperCard>
                        <Card>
                            <Picture
                                src={pet.photoUrl}
                                alt={`Foto de perfil do(a) ${pet.name}`}
                            />

                            <Information>
                                <span>{pet.name}</span>
                                <InformationSeparator />

                                <span>{getPetAgeText()}</span>
                            </Information>

                            <Actions>
                                <CardButton
                                    aria-label="Não amar"
                                    data-tip="Não amar"
                                    data-for="tooltip-match-card"
                                    icon={xBold}
                                    onClick={() => skipPet()}
                                />
                                <CardButton
                                    aria-label="Amar"
                                    data-tip="Amar"
                                    data-for="tooltip-match-card"
                                    icon={heartFill}
                                    hasIconHeart={true}
                                    onClick={() => lovePet()}
                                />
                            </Actions>

                            <ReportButton
                                aria-label="Denunciar"
                                data-for="tooltip-match-card"
                                data-tip="Denunciar"
                                onClick={() => setOpenReportModal(true)}
                            >
                                <Icon icon={warningDuotone} className="icon" />
                            </ReportButton>
                        </Card>
                    </WrapperCard>
                </motion.div>
            </>

            {openReportModal && (
                <ReportModal onClose={() => setOpenReportModal(false)} />
            )}
        </>
    )
}

export default MatchCard
