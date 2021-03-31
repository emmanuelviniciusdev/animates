import React from 'react'
import { WarningRecoverPassword } from './styles'
import SimpleButton from '../SimpleButton'
import AppInput from '../AppInput'
import envelopeSimpleDuotone from '@iconify/icons-ph/envelope-simple-duotone'

function FormForgotPassword() {
    return (
        <>
            <form>
                <AppInput
                    type="email"
                    placeholder="e-mail"
                    icon={envelopeSimpleDuotone}
                />

                <WarningRecoverPassword>
                    <p>
                        Você receberá em seu e-mail um link para dar
                        continuidade ao processo de recuperação de senha
                    </p>
                </WarningRecoverPassword>

                <SimpleButton className="form-btn">
                    Recuperar senha
                </SimpleButton>
            </form>
        </>
    )
}

export default FormForgotPassword
