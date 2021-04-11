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
import warningDuotone from '@iconify/icons-ph/warning-duotone'

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
                    {/* TODO: Use 'CardButton' instead of 'ButtonAction'. */}
                    <ButtonAction aria-label="Não amar">
                        <Icon icon={xBold} className="icon" />
                    </ButtonAction>
                    <ButtonAction aria-label="Amar">
                        <Icon icon={heartFill} className="icon icon-heart" />
                    </ButtonAction>
                </Actions>

                {/* TODO: Define yellow color. */}
                <ReportButton aria-label="Denunciar">
                    <Icon icon={warningDuotone} className="icon" />
                </ReportButton>
            </Card>
        </>
    )
}

export default MatchCard
