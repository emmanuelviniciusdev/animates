import React, { useEffect } from 'react'
import AuthSection from '../../components/AuthSection'
import { setPageTitle } from '../../shared/helpers'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'

function CriarConta() {
    useEffect(() => setPageTitle('Criar conta'), [])

    return (
        <>
            <ApplyDogAndCat1Background />

            <main>
                <AuthSection mode="register" />
            </main>
        </>
    )
}

export default CriarConta
