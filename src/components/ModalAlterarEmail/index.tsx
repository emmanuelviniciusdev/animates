import React from 'react'
import { Props } from './types'
import AppModal from '../AppModal'
import SimpleButton from '../SimpleButton'
import AppInput from '../AppInput'

function ModalAlterarEmail({ onClose }: Props) {
    return (
        <>
            <AppModal>
                <>
                    <header className="modal-header">
                        <span>alteração de e-mail</span>
                    </header>

                    <section className="modal-body">
                        <form>
                            <AppInput
                                type="email"
                                placeholder="novo e-mail"
                                aria-label="novo e-mail"
                            />
                            <AppInput
                                type="email"
                                placeholder="confirmar novo e-mail"
                                aria-label="confirmar novo e-mail"
                            />
                            <AppInput
                                type="password"
                                placeholder="senha"
                                aria-label="senha"
                            />
                        </form>
                    </section>

                    <footer className="modal-footer">
                        <SimpleButton>salvar</SimpleButton>
                        <SimpleButton btnTheme="secondary" onClick={onClose}>
                            cancelar
                        </SimpleButton>
                    </footer>
                </>
            </AppModal>
        </>
    )
}

export default ModalAlterarEmail
