import React from 'react'
import { LocalGlobalStyle } from './styles'
import AuthSection from '../../components/AuthSection'

function Login() {
    return (
        <>
            <LocalGlobalStyle />

            <main>
                <AuthSection />
            </main>
        </>
    )
}

export default Login
