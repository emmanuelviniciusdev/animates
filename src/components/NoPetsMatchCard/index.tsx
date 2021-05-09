import React from 'react'
import { Card } from './styles'
import { Icon } from '@iconify/react'
import ghostDuotone from '@iconify/icons-ph/ghost-duotone'

function NoPetsMatchCard() {
    return (
        <>
            <Card>
                <Icon icon={ghostDuotone} className="icon" />
                <h2>Não há mais pets...</h2>
            </Card>
        </>
    )
}

export default NoPetsMatchCard
