import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function Home() {
    const auth = useSelector((state: RootState) => state.auth)

    return (
        <div>
            <h1>O usuário está: {auth.token ? 'logado' : 'deslogado'}.</h1>
        </div>
    )
}

export default Home
