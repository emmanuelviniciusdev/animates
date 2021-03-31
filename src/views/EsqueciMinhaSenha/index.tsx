import React, { useEffect } from 'react'
import AuthSection from '../../components/AuthSection'
import { setPageTitle } from '../../shared/helpers'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'

function EsqueciMinhaSenha() {
    useEffect(() => setPageTitle('Recuperação de senha'), [])

    return (
        <>
            <ApplyDogAndCat1Background />

            <main>
                <AuthSection mode="forgot-password" />
            </main>
        </>
    )
}

export default EsqueciMinhaSenha
