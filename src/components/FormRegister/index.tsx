import React from 'react'
import SimpleButton from '../SimpleButton'
import AppInput from '../../components/AppInput'
import userCircleDuotone from '@iconify/icons-ph/user-circle-duotone'
import envelopeSimpleDuotone from '@iconify/icons-ph/envelope-simple-duotone'
import keyDuotone from '@iconify/icons-ph/key-duotone'

function FormRegister() {
    return (
        <>
            <form>
                <AppInput
                    type="email"
                    placeholder="e-mail"
                    icon={envelopeSimpleDuotone}
                />
                <AppInput
                    type="text"
                    placeholder="nome"
                    icon={userCircleDuotone}
                />
                <AppInput
                    type="text"
                    placeholder="sobrenome"
                    icon={userCircleDuotone}
                />
                <AppInput
                    type="password"
                    placeholder="senha"
                    icon={keyDuotone}
                />
                <AppInput
                    type="password"
                    placeholder="confirmar senha"
                    icon={keyDuotone}
                />

                <SimpleButton className="form-btn">Criar conta</SimpleButton>
            </form>
        </>
    )
}

export default FormRegister