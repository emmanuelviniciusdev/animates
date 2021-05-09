import React, { useEffect } from 'react'
import {
    ChoiceButton,
    WrapperChoiceButton,
    Content,
    SeparatorLine,
    Title,
} from './styles'
import Menu from '../../components/Menu'
import { setPageTitle } from '../../shared/helpers'
import { Icon } from '@iconify/react'
import pawPrintFill from '@iconify/icons-ph/paw-print-fill'
import heartBold from '@iconify/icons-ph/heart-fill'
import { useHistory } from 'react-router'
import { RoutePaths } from '../../routes'

function Inicio() {
    const history = useHistory()

    useEffect(() => setPageTitle('Início'), [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <main>
                <Content>
                    <Title>O que deseja fazer?</Title>

                    <SeparatorLine />

                    <WrapperChoiceButton>
                        <ChoiceButton
                            aria-label="Adotar"
                            onClick={() => history.push(RoutePaths.ADOCAO)}
                        >
                            <div>
                                <Icon icon={pawPrintFill} className="icon" />
                                <span>Adotar</span>
                            </div>
                        </ChoiceButton>
                        <ChoiceButton
                            aria-label="Dar match"
                            onClick={() => history.push(RoutePaths.MATCH)}
                        >
                            <div>
                                <Icon
                                    icon={heartBold}
                                    className="icon icon-heart"
                                />
                                <span>Dar match</span>
                            </div>
                        </ChoiceButton>
                    </WrapperChoiceButton>
                </Content>
            </main>
        </>
    )
}

export default Inicio
