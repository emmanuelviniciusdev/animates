import React from 'react'
import { ButtonOption, WrapperIcon, Text } from './styles'
import { Icon } from '@iconify/react'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import gearSixDuotone from '@iconify/icons-ph/gear-six-duotone'
import signOutBold from '@iconify/icons-ph/sign-out-bold'

function MenuPopUpMoreOptions() {
    return (
        <>
            <ButtonOption>
                <WrapperIcon>
                    <Icon icon={userCircleDuotone} className="icon" />
                </WrapperIcon>
                <Text>Configurações de perfil</Text>
            </ButtonOption>

            <ButtonOption>
                <WrapperIcon>
                    <Icon icon={gearSixDuotone} className="icon" />
                </WrapperIcon>
                <Text>Configurações de conta</Text>
            </ButtonOption>

            <ButtonOption>
                <WrapperIcon>
                    <Icon icon={signOutBold} className="icon" />
                </WrapperIcon>
                <Text>Sair</Text>
            </ButtonOption>
        </>
    )
}

export default MenuPopUpMoreOptions
