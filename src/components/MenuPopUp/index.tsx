import React from 'react'
import {
    PopUp,
    Header,
    Content,
    HeaderContent,
    Title,
    WrapperIcon,
    CloseButton,
} from './styles'
import { Props } from './types'
import { Icon } from '@iconify/react'
import listBold from '@iconify/icons-ph/list-bold'
import bellDuotone from '@iconify/icons-ph/bell-duotone'
import xBold from '@iconify/icons-ph/x-bold'
import MenuPopUpMoreOptions from '../MenuPopUpMoreOptions'
import MenuPopUpNotifications from '../MenuPopUpNotifications'

const popUpModes = {
    'more-options': {
        icon: listBold,
        title: 'Mais opções',
        component: MenuPopUpMoreOptions,
    },
    notifications: {
        icon: bellDuotone,
        title: 'Notificações',
        component: MenuPopUpNotifications,
    },
}

function MenuPopUp({ mode, onClose }: Props) {
    const popUp = popUpModes[mode]

    return (
        <>
            <PopUp>
                <Header>
                    <HeaderContent>
                        <WrapperIcon>
                            <Icon icon={popUp.icon} className="icon" />
                        </WrapperIcon>
                        <Title>{popUp.title}</Title>

                        <CloseButton aria-label="Fechar" onClick={onClose}>
                            <Icon icon={xBold} className="icon" />
                        </CloseButton>
                    </HeaderContent>
                </Header>

                <Content>
                    <popUp.component />
                </Content>
            </PopUp>
        </>
    )
}

export default MenuPopUp
