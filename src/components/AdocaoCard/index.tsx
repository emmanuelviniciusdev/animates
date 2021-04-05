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

function AdocaoCard() {
    return (
        <>
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
                    <ReportButton>
                        <Icon icon={warningOctagonalDuotone} className="icon" />
                    </ReportButton>
                </Actions>
            </Card>
        </>
    )
}

export default AdocaoCard
