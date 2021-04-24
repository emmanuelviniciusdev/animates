import React, { useEffect } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import RoundedButton from '../../components/RoundedButton'
import GalleryProfileSettings from '../../components/GalleryProfileSettings'
import FormPetInfo from '../../components/FormPetInfo'
import { setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content, SubContent, WrapperButtonSave } from './styles'
import plusBold from '@iconify/icons-ph/plus-bold'
import floppyDiskDuotone from '@iconify/icons-ph/floppy-disk-duotone'

function ConfiguracoesConta() {
    useEffect(() => setPageTitle('Configurações de Perfil'), [])

    // const { petInfo } = useSelector<RootState, ProfileSettingsStateType>(
    //     (state) => state.profileSettings
    // )

    const userHasNoPets = false

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Configurações de Perfil</PageTitle>

                <main>
                    <h2>Meu pet</h2>

                    {userHasNoPets && (
                        <Content>
                            <p>Você ainda não possui um pet cadastrado.</p>
                            <RoundedButton icon={plusBold}>
                                adicionar novo pet
                            </RoundedButton>
                        </Content>
                    )}

                    {!userHasNoPets && (
                        <Content>
                            <SubContent>
                                <h3>Galeria de fotos</h3>
                                <GalleryProfileSettings />
                            </SubContent>

                            <SubContent>
                                <h3>Informações do pet</h3>
                                <FormPetInfo />
                            </SubContent>
                        </Content>
                    )}

                    {/* TODO: Adjust weird position on the screen. */}
                    <WrapperButtonSave>
                        <RoundedButton icon={floppyDiskDuotone}>
                            salvar alterações
                        </RoundedButton>
                    </WrapperButtonSave>
                </main>
            </GeneralContent>
        </>
    )
}

export default ConfiguracoesConta
