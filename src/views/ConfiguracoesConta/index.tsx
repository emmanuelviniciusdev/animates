import React, { useEffect } from 'react'
import { Section } from './styles'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import SimpleButton from '../../components/SimpleButton'
import atDuotone from '@iconify/icons-ph/at-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'
import trashDuotone from '@iconify/icons-ph/trash-duotone'

function ConfiguracoesConta() {
    useEffect(() => setPageTitle('Configurações de Conta'), [])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Configurações de Conta</PageTitle>

                <main>
                    <Section>
                        <h2>E-mail e senha</h2>

                        <SimpleButton icon={atDuotone} btnTheme="tertiary">
                            alterar e-mail
                        </SimpleButton>
                        <SimpleButton icon={keyDuotone} btnTheme="tertiary">
                            alterar senha
                        </SimpleButton>
                    </Section>

                    <Section>
                        <h2>Deletar conta</h2>

                        <p style={{ margin: '30px 0 15px 0' }}>
                            Esta ação não tem mais volta!
                        </p>
                        <SimpleButton icon={trashDuotone}>
                            deletar conta
                        </SimpleButton>
                    </Section>
                </main>
            </GeneralContent>
        </>
    )
}

export default ConfiguracoesConta
