import React from 'react'
import AuthSection from '../../components/AuthSection'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'

function EsqueciMinhaSenha() {
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
