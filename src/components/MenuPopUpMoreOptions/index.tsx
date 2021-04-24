import React from 'react'
import { ButtonOption, WrapperIcon, Text } from './styles'
import { Icon } from '@iconify/react'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import gearSixDuotone from '@iconify/icons-ph/gear-six-duotone'
import signOutBold from '@iconify/icons-ph/sign-out-bold'
import { useHistory } from 'react-router'
import { RoutePaths } from '../../routes'

function MenuPopUpMoreOptions() {
    const history = useHistory()

    const handleLogout = () => {
        localStorage.removeItem('token')
        history.push(RoutePaths.LOGIN)
    }

    return (
        <>
            <ButtonOption
                onClick={() => history.push(RoutePaths.CONFIGURACOES_DE_PERFIL)}
            >
                <WrapperIcon>
                    <Icon icon={userCircleDuotone} className="icon" />
                </WrapperIcon>
                <Text>Configurações de perfil</Text>
            </ButtonOption>
            <ButtonOption
                onClick={() => history.push(RoutePaths.CONFIGURACOES_DE_CONTA)}
            >
                <WrapperIcon>
                    <Icon icon={gearSixDuotone} className="icon" />
                </WrapperIcon>
                <Text>Configurações de conta</Text>
            </ButtonOption>
            <ButtonOption onClick={handleLogout}>
                <WrapperIcon>
                    <Icon icon={signOutBold} className="icon" />
                </WrapperIcon>
                <Text>Sair</Text>
            </ButtonOption>
        </>
    )
}

export default MenuPopUpMoreOptions
