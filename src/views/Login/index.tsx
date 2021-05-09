import React, { useEffect } from 'react'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'
import AuthSection from '../../components/AuthSection'
import { setPageTitle } from '../../shared/helpers'

function Login() {
    useEffect(() => setPageTitle('Login'), [])

    return (
        <>
            <ApplyDogAndCat1Background />

            <main>
                <AuthSection />
            </main>
        </>
    )
}

export default Login
