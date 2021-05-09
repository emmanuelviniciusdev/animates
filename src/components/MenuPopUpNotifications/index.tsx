import React, { useState } from 'react'
import {
    MatchNotification,
    MatchNotificationActions,
    MatchNotificationContent,
    MatchNotificationDate,
    MatchNotificationDescription,
    MatchNotificationPicture,
    NoNotifications,
} from './styles'
import bolinha from '../../assets/images/bolinha.jpg'
import SimpleButton from '../SimpleButton'
import { Icon } from '@iconify/react'
import smileyMehDuotone from '@iconify/icons-ph/smiley-meh-duotone'

function MenuPopUpNotifications() {
    const [notifications] = useState(['foo'])

    const hasNotifications = notifications.length > 0
    const hasNoNotifications = notifications.length === 0

    return (
        <>
            {hasNoNotifications && (
                <NoNotifications>
                    <Icon icon={smileyMehDuotone} className="icon" />
                    <p>Sem notificações</p>
                </NoNotifications>
            )}

            {hasNotifications && (
                <MatchNotification>
                    <MatchNotificationContent>
                        <MatchNotificationPicture src={bolinha} />

                        <div>
                            <MatchNotificationDescription>
                                <b>Bolinha</b> te enviou uma solicitação de
                                match
                            </MatchNotificationDescription>

                            <MatchNotificationDate>
                                22 de Mar de 2021
                            </MatchNotificationDate>

                            <MatchNotificationActions>
                                <SimpleButton btnSize="sm">
                                    Aceitar
                                </SimpleButton>
                                <SimpleButton btnSize="sm" btnTheme="secondary">
                                    Recusar
                                </SimpleButton>
                            </MatchNotificationActions>
                        </div>
                    </MatchNotificationContent>
                </MatchNotification>
            )}
        </>
    )
}

export default MenuPopUpNotifications
