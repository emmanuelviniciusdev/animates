import React from 'react'
import AuthSection from '../../components/AuthSection'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'

function CriarConta() {
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
