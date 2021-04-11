import React, { useState } from 'react'
import {
    WrapperContent,
    Content,
    ButtonIcon,
    InsertBodyPaddingBottom,
} from './styles'
import { Icon } from '@iconify/react'
import houseDuotone from '@iconify/icons-ph/house-duotone'
import heartDuotone from '@iconify/icons-ph/heart-duotone'
import pawPrintDuotone from '@iconify/icons-ph/paw-print-duotone'
import chatCircleDotsDuotone from '@iconify/icons-ph/chat-circle-dots-duotone'
import bellDuotone from '@iconify/icons-ph/bell-duotone'
import arrowCircleUpDuotone from '@iconify/icons-ph/arrow-circle-up-duotone'
import arrowCircleDownDuotone from '@iconify/icons-ph/arrow-circle-down-duotone'
import MenuPopUp from '../MenuPopUp'
import { Modes as MenuPopUpModes } from '../MenuPopUp/types'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function Menu() {
    const [menuPopUpMode, setMenuPopUpMode] = useState<MenuPopUpModes | null>(
        null
    )

    const closeMenuPopUp = () => setMenuPopUpMode(null)
    const openMenuPopUpMoreOptions = () => setMenuPopUpMode('more-options')
    const openMenuPopUpNotifications = () => setMenuPopUpMode('notifications')

    // TODO: Finish implementation of menu tooltips.
    /**
     * Before screen width hits 1280px the menu is displayed at the bottom.
     */
    // const isMobileScreen = useMediaQuery({
    //     query: '(max-width: 1279px)',
    // })

    return (
        <>
            <InsertBodyPaddingBottom />

            {menuPopUpMode && (
                <MenuPopUp mode={menuPopUpMode} onClose={closeMenuPopUp} />
            )}

            <WrapperContent>
                <Content>
                    <Link to="/inicio">
                        <ButtonIcon aria-label="Início">
                            <div>
                                <Icon icon={houseDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/match">
                        <ButtonIcon aria-label="Match">
                            <div>
                                <Icon icon={heartDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/adocao">
                        <ButtonIcon aria-label="Adoção">
                            <div>
                                <Icon icon={pawPrintDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/mensagens">
                        <ButtonIcon aria-label="Mensagens">
                            <div>
                                <Icon icon={chatCircleDotsDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <ButtonIcon
                        aria-label="Notificações"
                        onClick={openMenuPopUpNotifications}
                    >
                        <div>
                            <Icon icon={bellDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon
                        aria-label="Mais opções"
                        onClick={openMenuPopUpMoreOptions}
                    >
                        <div>
                            <Icon
                                icon={arrowCircleUpDuotone}
                                className="icon-arrow-up"
                            />
                            <Icon
                                icon={arrowCircleDownDuotone}
                                className="icon-arrow-down"
                            />
                        </div>
                    </ButtonIcon>
                </Content>
            </WrapperContent>
        </>
    )
}

export default Menu
