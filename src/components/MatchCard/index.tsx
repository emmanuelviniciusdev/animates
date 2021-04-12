import React from 'react'
import {
    Actions,
    Card,
    Information,
    InformationSeparator,
    Picture,
    ReportButton,
} from './styles'
import tobby from '../../assets/images/tobby.jpg'
import { Icon } from '@iconify/react'
import heartFill from '@iconify/icons-ph/heart-fill'
import xBold from '@iconify/icons-ph/x-bold'
import warningDuotone from '@iconify/icons-ph/warning-duotone'
import CardButton from '../CardButton'
import ReactTooltip from 'react-tooltip'

function MatchCard() {
    return (
        <>
            <ReactTooltip id="tooltip-match-card" effect="solid" />

            <Card>
                <Picture src={tobby} alt="Foto de perfil do(a) Tobby" />

                <Information>
                    <span>Tobby</span>
                    <InformationSeparator />
                    <span>3 meses</span>
                </Information>

                <Actions>
                    <CardButton
                        aria-label="Não amar"
                        data-tip="Não amar"
                        data-for="tooltip-match-card"
                        icon={xBold}
                    />
                    <CardButton
                        aria-label="Amar"
                        data-tip="Amar"
                        data-for="tooltip-match-card"
                        icon={heartFill}
                        hasIconHeart={true}
                    />
                </Actions>

                {/* TODO: Define yellow color. */}
                <ReportButton
                    aria-label="Denunciar"
                    data-for="tooltip-match-card"
                    data-tip="Denunciar"
                >
                    <Icon icon={warningDuotone} className="icon" />
                </ReportButton>
            </Card>
        </>
    )
}

export default MatchCard
