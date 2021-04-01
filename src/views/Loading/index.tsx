import React from 'react'
import { Content } from './styles'
import LoadingSpinner from '../../components/LoadingSpinner'

function Loading() {
    return (
        <main>
            <Content>
                <LoadingSpinner
                    width="100px"
                    height="100px"
                    borderSize="10px"
                    aria-label="Carregando"
                />
            </Content>
        </main>
    )
}

export default Loading
