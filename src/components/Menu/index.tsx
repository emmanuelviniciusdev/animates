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
import ReactTooltip from 'react-tooltip'

function Menu() {
    const [menuPopUpMode, setMenuPopUpMode] = useState<MenuPopUpModes | null>(
        null
    )

    const closeMenuPopUp = () => setMenuPopUpMode(null)
    const openMenuPopUpMoreOptions = () => setMenuPopUpMode('more-options')
    const openMenuPopUpNotifications = () => setMenuPopUpMode('notifications')

    /**
     * Before screen width hits 1280px the menu is displayed at the bottom.
     */
    const isMobileScreen = useMediaQuery({
        query: '(max-width: 1279px)',
    })

    const reactTooltipPlace = isMobileScreen ? 'top' : 'bottom'

    return (
        <>
            <ReactTooltip
                id="tooltip-menu"
                place={reactTooltipPlace}
                effect="solid"
            />

            <InsertBodyPaddingBottom />

            {menuPopUpMode && (
                <MenuPopUp mode={menuPopUpMode} onClose={closeMenuPopUp} />
            )}

            <WrapperContent>
                <Content>
                    <Link to="/inicio">
                        <ButtonIcon
                            aria-label="Início"
                            data-for="tooltip-menu"
                            data-tip="Início"
                        >
                            <div>
                                <Icon icon={houseDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/match">
                        <ButtonIcon
                            aria-label="Match"
                            data-for="tooltip-menu"
                            data-tip="Match"
                        >
                            <div>
                                <Icon icon={heartDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/adocao">
                        <ButtonIcon
                            aria-label="Adoção"
                            data-for="tooltip-menu"
                            data-tip="Adoção"
                        >
                            <div>
                                <Icon icon={pawPrintDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <Link to="/mensagens">
                        <ButtonIcon
                            aria-label="Mensagens"
                            data-for="tooltip-menu"
                            data-tip="Mensagens"
                        >
                            <div>
                                <Icon icon={chatCircleDotsDuotone} />
                            </div>
                        </ButtonIcon>
                    </Link>

                    <ButtonIcon
                        aria-label="Notificações"
                        data-tip="Notificações"
                        data-for="tooltip-menu"
                        onClick={openMenuPopUpNotifications}
                    >
                        <div>
                            <Icon icon={bellDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon
                        aria-label="Mais opções"
                        data-tip="Mais opções"
                        data-for="tooltip-menu"
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
