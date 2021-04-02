import React from 'react'
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

function Menu() {
    return (
        <>
            <InsertBodyPaddingBottom />

            <WrapperContent>
                <Content>
                    <ButtonIcon aria-label="Início">
                        <div>
                            <Icon icon={houseDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon aria-label="Match">
                        <div>
                            <Icon icon={heartDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon aria-label="Adoção">
                        <div>
                            <Icon icon={pawPrintDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon aria-label="Mensagens">
                        <div>
                            <Icon icon={chatCircleDotsDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon aria-label="Notificações">
                        <div>
                            <Icon icon={bellDuotone} />
                        </div>
                    </ButtonIcon>

                    <ButtonIcon aria-label="Mais opções">
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
