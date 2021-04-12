import React from 'react'
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
import { Icon } from '@iconify/react'
import heartFill from '@iconify/icons-ph/heart-fill'
import warningOctagonalDuotone from '@iconify/icons-ph/warning-octagon-duotone'
import ReactTooltip from 'react-tooltip'

function AdocaoCard() {
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
                    <CardButton icon={heartFill} hasIconHeart={true}>
                        Adotar
                    </CardButton>
                    <ReportButton
                        aria-label="Denunciar"
                        data-for="tooltip-adocao-card"
                        data-tip="Denunciar"
                    >
                        <Icon icon={warningOctagonalDuotone} className="icon" />
                    </ReportButton>
                </Actions>
            </Card>
        </>
    )
}

export default AdocaoCard
