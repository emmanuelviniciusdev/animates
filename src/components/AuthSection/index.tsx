import React from 'react'
import { Props } from './types'
import { Content, Section, WrapperForm } from './styles'
import PageTitle from '../../components/PageTitle'
import FormLogin from '../../components/FormLogin'
import FormRegister from '../../components/FormRegister'
import FormForgotPassword from '../../components/FormForgotPassword'

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
        title: 'Recuperação de senha',
        formComponent: FormForgotPassword,
    },
}

function AuthSection({
    mode = 'login',
    pageTitleLineWidth = 'greaterThanContent',
}: Partial<Props>) {
    const AuthFormComponent = pageModes[mode].formComponent
    const pageTitle = pageModes[mode].title

    return (
        <Section>
            <Content>
                <header>
                    <PageTitle lineWidth={pageTitleLineWidth}>
                        {pageTitle}
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
