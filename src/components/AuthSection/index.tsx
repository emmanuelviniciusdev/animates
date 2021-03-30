import React from 'react'
import { Content, Form, Section, WrapperForm } from './styles'
import PageTitle from '../../components/PageTitle'
import AppInput from '../../components/AppInput'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'
import SimpleButton from '../SimpleButton'

function AuthSection() {
    return (
        <Section>
            <Content>
                <header>
                    <PageTitle lineWidth="greaterThanContent">Login</PageTitle>
                </header>

                <WrapperForm>
                    <Form>
                        <AppInput
                            type="email"
                            placeholder="login ou e-mail"
                            icon={userCircleDuotone}
                        />
                        <AppInput
                            type="password"
                            placeholder="senha"
                            icon={keyDuotone}
                        />

                        <SimpleButton className="form-btn">Entrar</SimpleButton>
                    </Form>
                </WrapperForm>
            </Content>
        </Section>
    )
}

export default AuthSection
