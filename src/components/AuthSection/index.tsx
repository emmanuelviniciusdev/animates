import React from 'react'
import { Props } from './types'
import { Content, Section, WrapperForm } from './styles'
import PageTitle from '../../components/PageTitle'
import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister'

const pageModes = {
    login: {
        title: 'Login',
        formComponent: FormLogin,
    },
    register: {
        title: 'Criar conta',
        formComponent: FormRegister,
    },
    'forgot-password': {
        title: 'Recuperar senha',
        formComponent: FormLogin,
    },
}

function AuthSection({ mode = 'login' }: Partial<Props>) {
    const AuthFormComponent = pageModes[mode].formComponent

    return (
        <Section>
            <Content>
                <header>
                    <PageTitle lineWidth="greaterThanContent">
                        {pageModes[mode].title}
                    </PageTitle>
                </header>

                <WrapperForm>
                    <AuthFormComponent />
                </WrapperForm>
            </Content>
        </Section>
    )
}

export default AuthSection
