import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import PageTitle from '../../components/PageTitle'
import RoundedButton from '../../components/RoundedButton'
import GalleryProfileSettings from '../../components/GalleryProfileSettings'
import FormPetInfo from '../../components/FormPetInfo'
import { appAxios, setPageTitle } from '../../shared/helpers'
import { GeneralContent } from '../../styles/commonStyles'
import { Content, SubContent } from './styles'
import plusBold from '@iconify/icons-ph/plus-bold'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function ConfiguracoesConta() {
    const [userHasNoPets, setUserHasNoPets] = useState(true)
    const [openFormPet, setOpenFormPet] = useState(false)

    const auth = useSelector((state: RootState) => state.auth)

    useEffect(() => setPageTitle('Configurações de Perfil'), [])

    /**
     * Verifies wheter or not user has a pet.
     */
    useEffect(() => {
        if (!auth.userid) return

        appAxios(false)
            .get(`usuario/${auth.userid}/animal`)
            .then((res) => setUserHasNoPets(res.data.length === 0))
    }, [auth.userid])

    return (
        <>
            <header>
                <Menu />
            </header>

            <GeneralContent>
                <PageTitle>Configurações de Perfil</PageTitle>

                <main>
                    <h2>Meu pet</h2>

                    {userHasNoPets && !openFormPet && (
                        <Content>
                            <p>Você ainda não possui um pet cadastrado.</p>
                            <RoundedButton
                                icon={plusBold}
                                onClick={() => setOpenFormPet(true)}
                            >
                                adicionar novo pet
                            </RoundedButton>
                        </Content>
                    )}

                    {(!userHasNoPets || openFormPet) && (
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
                </main>
            </GeneralContent>
        </>
    )
}

export default ConfiguracoesConta
