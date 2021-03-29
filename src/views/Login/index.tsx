import React from 'react'
import { LocalGlobalStyle } from './styles'
import AuthModal from '../../components/AuthModal'

function Login() {
    return (
        <>
            <LocalGlobalStyle />

            <main>
                <AuthModal />
            </main>
        </>
    )
}

export default Login
