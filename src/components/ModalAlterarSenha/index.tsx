import React from 'react'
import { Props } from './types'
import AppModal from '../AppModal'
import SimpleButton from '../SimpleButton'
import AppInput from '../AppInput'

function ModalAlterarSenha({ onClose }: Props) {
    return (
        <>
            <AppModal>
                <>
                    <header className="modal-header">
                        <span>alteração de senha</span>
                    </header>

                    <section className="modal-body">
                        <form>
                            <AppInput
                                type="password"
                                placeholder="senha atual"
                                aria-label="senha atual"
                            />
                            <AppInput
                                type="password"
                                placeholder="nova senha"
                                aria-label="nova senha"
                            />
                            <AppInput
                                type="password"
                                placeholder="confirmar nova senha"
                                aria-label="confirmar nova senha"
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

export default ModalAlterarSenha
