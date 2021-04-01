import React from 'react'
import { ForgotPasswordArea, A, ForgotPasswordContent } from './styles'
import SimpleButton from '../SimpleButton'
import AppInput from '../../components/AppInput'
import { Icon } from '@iconify/react'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'
import questionDuotone from '@iconify/icons-ph/question-duotone'

function FormLogin() {
    return (
        <>
            <form>
                <AppInput
                    type="email"
                    placeholder="e-mail"
                    aria-label="e-mail"
                    icon={userCircleDuotone}
                />
                <AppInput
                    type="password"
                    placeholder="senha"
                    aria-label="senha"
                    icon={keyDuotone}
                />

                <ForgotPasswordArea>
                    <ForgotPasswordContent>
                        <A href="#">esqueci minha senha</A>
                        <Icon icon={questionDuotone} className="icon" />
                    </ForgotPasswordContent>
                </ForgotPasswordArea>

                <SimpleButton className="form-btn">Entrar</SimpleButton>
                <SimpleButton btnTheme="secondary" className="form-btn">
                    Criar uma conta
                </SimpleButton>
            </form>
        </>
    )
}

export default FormLogin
