import React from 'react'
import {
    Actions,
    ButtonAction,
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
import warningOctagonalDuotone from '@iconify/icons-ph/warning-octagon-duotone'

function MatchCard() {
    return (
        <>
            <Card>
                <Picture src={tobby} alt="Foto de perfil do(a) Tobby" />

                <Information>
                    <span>Tobby</span>
                    <InformationSeparator />
                    <span>3 meses</span>
                </Information>

                <Actions>
                    <ButtonAction aria-label="Não amar">
                        <Icon icon={xBold} className="icon" />
                    </ButtonAction>
                    <ButtonAction aria-label="Amar">
                        <Icon icon={heartFill} className="icon icon-heart" />
                    </ButtonAction>
                </Actions>

                <ReportButton aria-label="Denunciar">
                    <Icon icon={warningOctagonalDuotone} className="icon" />
                </ReportButton>
            </Card>
        </>
    )
}

export default MatchCard
