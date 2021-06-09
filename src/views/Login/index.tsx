import React, { useEffect } from 'react'
import { ApplyDogAndCat1Background } from '../../styles/commonStyles'
import AuthSection from '../../components/AuthSection'
import { setPageTitle } from '../../shared/helpers'

function Login() {
    useEffect(() => setPageTitle('Login'), [])

    fetch('https://animatess.herokuapp.com/v1/usuario/1/animal', {
        method: 'get',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': 'aa',
        },
        // body: JSON.stringify({
        //     email: 'admin@emaaassssaail.com',
        //     senha: '123',
        // }),
    })

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
