import React, { useState } from 'react'
import {
    PetInformation,
    Actions,
    Card,
    PetNameAndAge,
    PetDescription,
    ReportButton,
} from './styles'
import Gallery from '../Gallery'
import CardButton from '../CardButton'
import ReportModal from '../ReportModal'
import { Icon } from '@iconify/react'
import heartFill from '@iconify/icons-ph/heart-fill'
import warningDuotone from '@iconify/icons-ph/warning-duotone'
import ReactTooltip from 'react-tooltip'
import { useHistory } from 'react-router'
import { RoutePaths } from '../../routes'

function AdocaoCard() {
    const history = useHistory()
    const [openReportModal, setOpenReportModal] = useState(false)

    return (
        <>
            <ReactTooltip id="tooltip-adocao-card" effect="solid" />

            <Card>
                <Gallery />

                <PetInformation>
                    <PetNameAndAge>
                        <b>Tobby</b>, 3 meses
                    </PetNameAndAge>

                    <PetDescription>
                        Este adorável filhote de cachorro tem apenas 3 meses de
                        vida. Ele adora brincar com meus sapatos e dormir
                        bastante...
                    </PetDescription>
                </PetInformation>

                <Actions>
                    <CardButton
                        icon={heartFill}
                        hasIconHeart={true}
                        onClick={() => history.push(RoutePaths.CHAT('1'))}
                    >
                        Adotar
                    </CardButton>
                    <ReportButton
                        aria-label="Denunciar"
                        data-for="tooltip-adocao-card"
                        data-tip="Denunciar"
                        onClick={() => setOpenReportModal(true)}
                    >
                        <Icon icon={warningDuotone} className="icon" />
                    </ReportButton>
                </Actions>
            </Card>

            {openReportModal && (
                <ReportModal onClose={() => setOpenReportModal(false)} />
            )}
        </>
    )
}

export default AdocaoCard
